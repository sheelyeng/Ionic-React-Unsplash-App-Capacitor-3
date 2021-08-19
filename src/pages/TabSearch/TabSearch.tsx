import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import { useCallback, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";

import AppSearchSegment from "./AppSearchSegment/AppSearchSegment";

import { useAppDispatch } from "../../stores";

import { searchSelectors } from "../../stores/slices/searchReducer";
import { MAX_PER_PAGE } from "../../constants";
import { fetchListPhotos } from "../../stores/middleware/photos";

import "./TabSearch.scss";
import {
  searchCollectionsQry,
  searchPhotosQry,
  searchUsersQry,
} from "../../stores/middleware/search";
import AppSearchPhotos from "../../components/AppSearchPhotos/AppSearchPhotos";
import AppSearchCollections from "../../components/AppSearchCollections/AppSearchCollections";
import AppSearchUsers from "../../components/AppSearchUsers/AppSearchUsers";

const TabSearch: React.FC = () => {
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("0");
  const [refreshing, setRefreshing] = useState(false);
  console.log("activeTab: ", activeTab);

  const PhotosArr = useSelector(searchSelectors.searchPhotos);
  const CollectionsArr = useSelector(searchSelectors.searchCollections);
  const UsersArr = useSelector(searchSelectors.searchUsers);

  const isLoadingSearchUsers = useSelector(
    searchSelectors.isLoadingSearchUsers
  );
  const isLoadingSearchCollections = useSelector(
    searchSelectors.isLoadingSearchCollections
  );
  const isLoadingSearchPhotos = useSelector(
    searchSelectors.isLoadingSearchPhotos
  );

  const onSearching = useCallback((value) => {
    setSearchText(value);

    if (value && !isEmpty(value)) {
      console.log("searchUsers");
      dispatch(
        searchUsersQry({
          query: value,
          page: 1,
          per_page: MAX_PER_PAGE,
        })
      );

      dispatch(
        searchPhotosQry({
          query: value,
          page: 1,
          per_page: MAX_PER_PAGE,
        })
      );

      dispatch(
        searchCollectionsQry({
          query: value,
          page: 1,
          per_page: MAX_PER_PAGE,
        })
      );
    }
  }, []);

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);
    await dispatch(
      fetchListPhotos({
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "popular",
      })
    );
    setRefreshing(false);
    event.detail.complete();
  };

  const onPressImage = () => {};

  const onPressCollectionImage = () => {};

  const onPressCollectionTitle = () => {};

  useEffect(() => {
    dispatch(
      fetchListPhotos({
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "popular",
      })
    );
  }, []);

  return (
    <IonPage className="TabSearch">
      <IonHeader>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            debounce={500}
            onIonChange={(e) => onSearching(e.detail.value)}
          ></IonSearchbar>
        </IonToolbar>
        <AppSearchSegment activeIndex={activeTab} onChange={setActiveTab} />
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {activeTab === "0" && PhotosArr && PhotosArr.results && (
          <AppSearchPhotos
            refreshing={refreshing}
            PhotosArr={PhotosArr.results}
          />
        )}
        {activeTab === "1" && CollectionsArr && CollectionsArr.results && (
          <AppSearchCollections
            refreshing={refreshing}
            onPressImage={onPressCollectionImage}
            onPressTitle={onPressCollectionTitle}
            CollectionsArr={CollectionsArr.results}
          />
        )}
        {activeTab === "2" && UsersArr && UsersArr.results && (
          <AppSearchUsers refreshing={refreshing} UsersArr={UsersArr.results} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default TabSearch;
