import { IonButton, IonIcon } from "@ionic/react";
import { mail, personAdd } from "ionicons/icons";
import React from "react";
import "./AppUserProfileFollowMessage.scss";

const AppUserProfileFollowMessage = () => {
  return (
    <div className="AppUserProfileFollowMessage">
      <IonButton color="light">
        <IonIcon slot="icon-only" icon={personAdd} />
      </IonButton>
      <IonButton color="light">
        <IonIcon slot="icon-only" icon={mail} />
      </IonButton>
    </div>
  );
};

export default AppUserProfileFollowMessage;
