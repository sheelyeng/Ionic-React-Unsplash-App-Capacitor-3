import { IonButton, IonIcon } from "@ionic/react";
import { add, download, heart } from "ionicons/icons";
import React from "react";
import { IPhoto } from "../../models/photo";
import AppUserCardItem from "../AppUserCardItem/AppUserCardItem";

import "./AppCardItem.scss";

interface Props {
  item?: IPhoto;
  showLoading?: boolean;
  onUserPress?: () => void;
  onMorePress?: () => void;
  onImagePress?: () => void;
}

const AppCardItem: React.FC<Props> = ({
  item,
  showLoading,
  onUserPress,
  onMorePress,
  onImagePress,
}) => {
  return (
    <div className="AppCardItem">
      <AppUserCardItem
        user={item?.user}
        onMorePress={onMorePress}
        onUserPress={onUserPress}
      />
      <div className="ImageContainer" onClick={onImagePress}>
        <img src={item?.urls?.small} alt="" />
      </div>
      <div className="ReactionWrapper">
        <div className="lReactions">
          <IonButton color="light">
            <IonIcon slot="icon-only" icon={heart} />
          </IonButton>
          <IonButton color="light">
            <IonIcon slot="icon-only" icon={add} />
          </IonButton>
        </div>
        <div className="rReactions">
          <IonButton color="light">
            <IonIcon slot="icon-only" icon={download} />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default AppCardItem;
