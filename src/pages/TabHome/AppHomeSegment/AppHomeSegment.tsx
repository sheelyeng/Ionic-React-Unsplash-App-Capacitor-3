import React from "react";
import {
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";

import "./AppHomeSegment.scss";

interface Props {
  activeIndex?: string;
  onChange: (value: any) => void;
}

const AppHomeSegment: React.FC<Props> = ({ activeIndex, onChange }) => {
  return (
    <IonToolbar>
      <IonSegment
        className="AppHomeSegment"
        mode="md"
        value={String(activeIndex)}
        onIonChange={(e) => onChange(e.detail.value)}
      >
        <IonSegmentButton value="0">
          <IonLabel>Editorial</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="1">
          <IonLabel>Following</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );
};

export default AppHomeSegment;
