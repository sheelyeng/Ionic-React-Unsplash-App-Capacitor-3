import { RefresherEventDetail } from "@ionic/core";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AppCollectionItem from "../../components/AppCollectionItem/AppCollectionItem";
import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import { MAX_PER_PAGE } from "../../constants";
import { ICollection } from "../../models/collection";
import { useAppDispatch } from "../../stores";
import { fetchCollections } from "../../stores/middleware/collection";
import { collectionsSelectors } from "../../stores/slices/collectionsSlice";
import AppCollectionsHeader from "./AppCollectionsHeader/AppCollectionsHeader";
import "./TabCollections.scss";

const TabCollections: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const CollectionsArr = useSelector(collectionsSelectors.collections);

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);
    await dispatch(
      fetchCollections({
        page: 1,
        per_page: MAX_PER_PAGE,
      })
    );
    setRefreshing(false);
    event.detail.complete();
  };

  const onPressImage = (id: string) => {};

  const onPressTitle = (id: string) => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <AppHeaderLogo color="dark" height={30} width={115} />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <AppCollectionsHeader />
        <IonList>
          {CollectionsArr &&
            CollectionsArr.map((collection: ICollection, index) => (
              <AppCollectionItem
                key={index}
                item={collection}
                onPressImage={() => onPressImage(collection.id)}
                onPressTitle={() => onPressTitle(collection.id)}
              />
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TabCollections;
