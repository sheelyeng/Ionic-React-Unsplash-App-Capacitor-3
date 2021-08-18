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
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AppCardItem from "../../components/AppCardItem/AppCardItem";
import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import { MAX_PER_PAGE } from "../../constants";
import { IPhoto } from "../../models/photo";
import { useAppDispatch } from "../../stores";
import { fetchListPhotos } from "../../stores/middleware/photos";
import { fetchListTopics } from "../../stores/middleware/topic";
import { photosSelectors } from "../../stores/slices/photosSlice";
import { topicsSelectors } from "../../stores/slices/topicsSlice";
import { loadFakeData } from "../../utils";
import AppHomeCategories from "./AppHomeCategories/AppHomeCategories";
import AppHomeCategoriesHeader from "./AppHomeCategoriesHeader/AppHomeCategoriesHeader";
import AppHomeSegment from "./AppHomeSegment/AppHomeSegment";
import "./TabHome.scss";

const TabHome: React.FC = () => {
  const fakePhotosArr = loadFakeData();
  const router = useIonRouter();
  const [activeTab, setActiveTab] = useState("0");
  const [photosPage, setPhotosPage] = useState(1);
  const [topicsPage, setTopicsPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingTopicMore, setLoadingTopicMore] = useState(false);

  const TopicsArr = useSelector(topicsSelectors.topics);
  const PhotosArr = useSelector(photosSelectors.photos);
  const isLoadingPhotos = useSelector(photosSelectors.isLoadingPhotos);
  const isLoadingTopics = useSelector(topicsSelectors.isLoadingTopics);
  const dispatch = useAppDispatch();

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);
    setLoadingMore(false);

    setPhotosPage(1);
    setTopicsPage(1);

    dispatch(
      fetchListTopics({
        ids: null,
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "position",
      })
    );
    dispatch(
      fetchListPhotos({
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "latest",
      })
    );
    setRefreshing(false);
    event.detail.complete();
  };

  const onUserPress = (username: string) => {};

  const onImagePress = (id: string) => {};

  const onViewAllPress = () => {
    router.push("/main/topics");
  };

  const onTopicPress = (id_or_slug: string) => {};

  const renderEditorial = () => (
    <>
      <AppHomeCategoriesHeader onViewAllPress={onViewAllPress} />
      <AppHomeCategories
        showLoading={isLoadingTopics}
        topics={TopicsArr}
        onPress={onTopicPress}
      />
      <IonList>
        {PhotosArr &&
          PhotosArr.map((photo: IPhoto, index) => (
            <AppCardItem
              key={index}
              item={photo}
              showLoading={isLoadingPhotos}
              onUserPress={() => onUserPress(photo?.user?.username)}
              onImagePress={() => onImagePress(photo.id)}
            />
          ))}
      </IonList>
    </>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <AppHeaderLogo color="dark" height={30} width={115} />
          </IonTitle>
        </IonToolbar>
        <AppHomeSegment activeIndex={activeTab} onChange={setActiveTab} />
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {activeTab === "0" && renderEditorial()}
      </IonContent>
    </IonPage>
  );
};

export default TabHome;
