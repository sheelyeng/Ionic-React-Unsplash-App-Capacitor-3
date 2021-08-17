import { useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Landing.scss";

import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import AppFacebookButton from "../../components/AppFacebookButton/AppFacebookButton";
import { MAX_PER_PAGE } from "../../constants";
import { useAppDispatch } from "../../stores";
import { fetchListTopics } from "../../stores/middleware/topic";
import { fetchListPhotos } from "../../stores/middleware/photos";
import { fetchCollections } from "../../stores/middleware/collection";

const Landing: React.FC = () => {
  const router = useIonRouter();
  const dispatch = useAppDispatch();

  const onSkipButton = () => {
    router.push("/tabs/home");
  };

  const onSignUp = () => {};

  const onLogin = () => {};

  useEffect(() => {
    dispatch(
      fetchListTopics({
        ids: null,
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "position",
      })
    );
    dispatch(
      fetchListPhotos({
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "latest",
      })
    );
    dispatch(
      fetchCollections({
        page: 1,
        per_page: MAX_PER_PAGE,
      })
    );
  }, []);

  return (
    <IonPage className="Landing">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              fill="clear"
              color="light"
              className="SkipButton"
              onClick={onSkipButton}
            >
              Skip
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ContentContainer">
          <AppHeaderLogo />
          <p>Creation starts here</p>
        </div>
        <div className="FooterContainer">
          <div className="ButtonViews">
            <AppFacebookButton />
            <IonButton className="AppButton" expand="block" color="dark">
              Sign up with email
            </IonButton>
          </div>
          <div className="HaveAccountContainer">
            <p>
              Already have an account?
              <span className="LoginButtonText">Login</span>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
