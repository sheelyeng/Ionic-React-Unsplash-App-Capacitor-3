import { IonIcon, IonSegment, IonSegmentButton } from "@ionic/react";
import { heart, image, layers } from "ionicons/icons";
import React from "react";

import "./AppUserProfileSegment.scss";

interface Props {
  activeIndex?: string;
  onChange: (value: any) => void;
  total_collections?: number;
  total_likes?: number;
  total_photos?: number;
}

const AppUserProfileSegment: React.FC<Props> = ({
  activeIndex,
  onChange,
  total_collections,
  total_likes,
  total_photos,
}) => {
  return (
    <IonSegment
      mode="md"
      className="AppUserProfileSegment"
      value={activeIndex}
      onIonChange={(e) => onChange(e.detail.value)}
    >
      <IonSegmentButton value="0">
        <IonIcon icon={image} />
      </IonSegmentButton>
      <IonSegmentButton value="1">
        <IonIcon icon={heart} />
      </IonSegmentButton>
      <IonSegmentButton value="2">
        <IonIcon icon={layers} />
      </IonSegmentButton>
    </IonSegment>
  );
};

export default AppUserProfileSegment;
