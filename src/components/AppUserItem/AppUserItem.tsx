import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";

import "./AppUserItem.scss";

interface Props {
  id: string;
  name: string;
  username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  onPress?: () => void;
}

const AppUserItem: React.FC<Props> = ({
  name,
  username,
  profile_image,
  onPress,
}) => {
  return (
    <IonItem lines="none" className="AppUserItem">
      <IonAvatar slot="start">
        <img src={profile_image?.medium} alt="" />
      </IonAvatar>
      <IonLabel>
        <h2>{name}</h2>
        <p>{username}</p>
      </IonLabel>
    </IonItem>
  );
};

export default AppUserItem;
