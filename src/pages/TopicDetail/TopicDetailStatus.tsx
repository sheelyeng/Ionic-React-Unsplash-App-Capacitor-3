import { IonAvatar, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import ImageIcon from "@material-ui/icons/Image";
import { ITopic } from "../../models/topic";
import AppStatus from "../../components/AppStatus/AppStatus";
import { people, personCircleOutline } from "ionicons/icons";

import "./TopicDetailStatus.scss";

interface Props {
  topic?: ITopic | null;
  showLoading?: boolean;
  onUserPress: (ev: any) => void;
}

const TopicDetailStatus: React.FC<Props> = ({
  topic,
  showLoading,
  onUserPress,
}) => {
  return (
    <IonList className="TopicDetailStatus">
      <IonItem lines="full">
        <div slot="start">
          <OfflineBoltIcon fontSize="small" />
        </div>
        <IonLabel>Status</IonLabel>
        <div slot="end">
          <AppStatus />
        </div>
      </IonItem>
      <IonItem lines="full">
        <IonIcon src={personCircleOutline} slot="start" />
        <IonLabel>Curator</IonLabel>
        <IonAvatar
          className="topicAvatar"
          slot="end"
          onClick={() => onUserPress(String(topic?.owners[0]?.username))}
        >
          <img src={topic?.owners[0]?.profile_image?.small} alt="" />
        </IonAvatar>
      </IonItem>
      <IonItem lines="full">
        <div slot="start">
          <ImageIcon fontSize="small" />
        </div>
        <IonLabel>Contributions</IonLabel>
        <div slot="end" className="textContribution">
          {topic?.total_photos}
        </div>
      </IonItem>
      <IonItem lines="full" className="TopContributors">
        <IonIcon src={people} slot="start" />
        <IonLabel>Top contributors</IonLabel>
        <div slot="end" className="TopContributorsContainer">
          {topic?.top_contributors &&
            topic?.top_contributors.map((item: any, index: number) => (
              <IonAvatar
                key={index}
                onClick={() => onUserPress(String(item?.username))}
              >
                <img src={item.profile_image?.small} alt="" />
              </IonAvatar>
            ))}
        </div>
      </IonItem>
    </IonList>
  );
};

export default TopicDetailStatus;
