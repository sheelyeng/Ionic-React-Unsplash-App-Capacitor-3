import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";
import { IUser } from "../../models/user";

import "./AppUserCardItem.scss";

interface Props {
  user?: IUser;
  onUserPress?: () => void;
  onMorePress?: () => void;
}

const AppUserCardItem: React.FC<Props> = ({
  user,
  onMorePress,
  onUserPress,
}) => {
  return (
    <IonItem lines="none" className="AppUserCardItem">
      <IonAvatar slot="start" onClick={onUserPress}>
        <img src={user?.profile_image?.small} alt="" />
      </IonAvatar>
      <IonLabel onClick={onUserPress}>
        <h2>{user?.name}</h2>
        <p>{user?.username}</p>
      </IonLabel>
      <IonIcon icon={ellipsisVertical} onClick={onMorePress} slot="end" />
    </IonItem>
  );
};

export default AppUserCardItem;
