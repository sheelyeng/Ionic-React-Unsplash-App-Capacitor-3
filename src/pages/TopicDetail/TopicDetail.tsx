import {
  IonBackButton,
  IonButtons,
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
import { RefresherEventDetail } from "@ionic/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import { useAppDispatch } from "../../stores";
import { topicsSelectors } from "../../stores/slices/topicsSlice";
import TopicDetailInformation from "./TopicDetailInformation";
import { getTopic, getTopicPhotos } from "../../stores/middleware/topic";
import { MAX_PER_PAGE } from "../../constants";
import TopicDetailStatus from "./TopicDetailStatus";
import { useLocation } from "react-router";
import AppCardItem from "../../components/AppCardItem/AppCardItem";
import { IPhoto } from "../../models/photo";

import "./TopicDetail.scss";

const TopicDetail: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [idSlug, setIdSlug] = useState("");
  const router = useIonRouter();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const topic = useSelector(topicsSelectors.topic);
  const TopicPhotos = useSelector(topicsSelectors.topicPhotos);
  const isLoadingTopic = useSelector(topicsSelectors.isLoadingTopic);
  const isLoadingTopicPhotos = useSelector(
    topicsSelectors.isLoadingTopicPhotos
  );

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);
    dispatch(getTopic(idSlug));
    dispatch(
      getTopicPhotos({
        id_or_slug: idSlug,
        params: {
          page: currentPage,
          per_page: MAX_PER_PAGE,
          order_by: "latest",
        },
      })
    );
    setRefreshing(false);
  };

  const onUserPress = (username: string) => {};

  const onImagePress = (id: string) => {};

  useEffect(() => {
    const params: any = location.state;
    console.log("params: ", params);
    if (params && params.id_or_slug) {
      setIdSlug(params.id_or_slug);

      dispatch(getTopic(params.id_or_slug));
      dispatch(
        getTopicPhotos({
          id_or_slug: params.id_or_slug,
          params: {
            page: currentPage,
            per_page: MAX_PER_PAGE,
            order_by: "latest",
          },
        })
      );
    }
  }, []);

  return (
    <IonPage className="TopicDetail">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <AppHeaderLogo color="dark" height={30} width={115} />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="DetailView">
          <TopicDetailInformation topic={topic} showLoading={isLoadingTopic} />
          <TopicDetailStatus
            topic={topic}
            showLoading={isLoadingTopic}
            onUserPress={onUserPress}
          />
        </div>
        <IonList>
          {TopicPhotos &&
            TopicPhotos.map((photo: IPhoto, index) => (
              <AppCardItem
                key={index}
                item={photo}
                showLoading={isLoadingTopicPhotos}
                onUserPress={() => onUserPress(photo?.user?.username)}
                onImagePress={() => onImagePress(photo.id)}
              />
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TopicDetail;
