import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { imageSharp } from "ionicons/icons";
import React from "react";
import { IPreviewPhotos } from "../../models/generic";
import { IPhoto } from "../../models/photo";
import { IUser } from "../../models/user";
import AppStatus from "../AppStatus/AppStatus";
import "./AppCardTopic.scss";

interface Props {
  title?: string;
  description?: string;
  cover_photo?: IPhoto;
  owners: IUser;
  preview_photos?: IPreviewPhotos[];
  total_photos?: number;
  status?: string;
  featured?: boolean;
  onUserPress?: () => void;
  onPress?: () => void;
}

const AppCardTopic: React.FC<Props> = ({
  title,
  description,
  cover_photo,
  owners,
  total_photos,
  featured,
  status,
  onUserPress,
  onPress,
}) => {
  return (
    <IonCard className="AppCardTopic" onClick={onPress}>
      <div className="CardImageContainer">
        {status && status === "open" && (
          <div className="FeatureView">
            <AppStatus />
          </div>
        )}
        <img src={cover_photo?.urls?.small} alt="" />
      </div>
      <div className="TopicCardContent">
        <IonItem className="TopicCardHeader" lines="none">
          <IonLabel>
            <h2>{title}</h2>
            <p>by {owners?.name}</p>
          </IonLabel>
          <IonAvatar slot="end" onClick={onUserPress}>
            <img src={owners?.profile_image?.small} alt="" />
          </IonAvatar>
        </IonItem>
      </div>
      <IonCardContent>{description}</IonCardContent>
      <IonItem className="TopicContribution" lines="none">
        <IonIcon icon={imageSharp} slot="start" />
        <IonLabel>{total_photos} contributions</IonLabel>
      </IonItem>
    </IonCard>
  );
};

export default AppCardTopic;
