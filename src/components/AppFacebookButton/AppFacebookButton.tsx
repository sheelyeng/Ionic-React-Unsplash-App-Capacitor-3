import { IonButton, IonIcon } from "@ionic/react";
import { logoFacebook } from "ionicons/icons";
import React from "react";

import "./AppFacebookButton.scss";

const AppFacebookButton: React.FC = () => {
  return (
    <IonButton
      className="AppFacebookButton"
      color="light-facebook"
      expand="block"
    >
      <IonIcon slot="start" icon={logoFacebook} />
      Continue with Facebook
    </IonButton>
  );
};

export default AppFacebookButton;
