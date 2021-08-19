import {
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import { imageSharp, layers, people } from "ionicons/icons";
import React from "react";

import "./AppSearchSegment.scss";

interface Props {
  activeIndex?: any;
  onChange: (value: any) => void;
}

const AppSearchSegment: React.FC<Props> = ({ activeIndex, onChange }) => {
  return (
    <IonToolbar>
      <IonSegment
        className="AppSearchSegment"
        value={activeIndex}
        mode="md"
        onIonChange={(e) => onChange(e.detail.value)}
      >
        <IonSegmentButton value="0">
          <IonIcon icon={imageSharp} />
        </IonSegmentButton>
        <IonSegmentButton value="1">
          <IonIcon icon={layers} />
        </IonSegmentButton>
        <IonSegmentButton value="2">
          <IonIcon icon={people} />
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );
};

export default AppSearchSegment;
