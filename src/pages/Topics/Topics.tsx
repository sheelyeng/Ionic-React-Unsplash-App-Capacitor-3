import { RefresherEventDetail } from "@ionic/core";
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
} from "@ionic/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppCardTopic from "../../components/AppCardTopic/AppCardTopic";
import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import { MAX_PER_PAGE } from "../../constants";
import { ITopic } from "../../models/topic";
import { useAppDispatch } from "../../stores";
import { fetchListTopics } from "../../stores/middleware/topic";
import { topicsSelectors } from "../../stores/slices/topicsSlice";

import "./Topics.scss";

const Topics: React.FC = () => {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const TopicsArr = useSelector(topicsSelectors.topics);

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);
    await dispatch(
      fetchListTopics({
        ids: null,
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "position",
      })
    );
    setRefreshing(false);
    event.detail.complete();
  };

  const onTopicPress = (id_or_slug: string) => {};

  const onUserPress = (username: string) => {};

  return (
    <IonPage className="Topics">
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
        <IonList>
          {TopicsArr &&
            TopicsArr.map((item: ITopic, index) => (
              <AppCardTopic
                key={index}
                title={item.title}
                description={item.description}
                cover_photo={item.cover_photo}
                owners={item?.owners[0]}
                total_photos={item?.total_photos}
                status={item?.status}
                onPress={() => onTopicPress(item.id)}
                onUserPress={() => onUserPress(item?.owners[0]?.username)}
              />
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Topics;
