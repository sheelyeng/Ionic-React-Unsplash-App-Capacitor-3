import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  addCircle,
  ellipse,
  fileTrayFull,
  home,
  person,
  search,
  square,
  triangle,
} from "ionicons/icons";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import TabHome from "../pages/TabHome/TabHome";
import TabCollections from "../pages/TabCollections/TabCollections";
import TabSearch from "../pages/TabSearch/TabSearch";
import TabAccount from "../pages/TabAccount/TabAccount";

import "./tabs.scss";

export default function Tabs() {
  return (
    <IonTabs className="Tabs">
      <IonRouterOutlet>
        <Route exact path="/tabs/home">
          <TabHome />
        </Route>
        <Route exact path="/tabs/collections">
          <TabCollections />
        </Route>
        <Route exact path="/tabs/search">
          <TabSearch />
        </Route>
        <Route exact path="/tabs/account">
          <TabAccount />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tabHome" href="/tabs/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tabCollections" href="/tabs/collections">
          <IonIcon icon={fileTrayFull} />
          <IonLabel>Collections</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tabUpload">
          <IonIcon icon={addCircle} />
          <IonLabel>Upload</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tabSearch" href="/tabs/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tabAccount" href="/tabs/account">
          <IonIcon icon={person} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
