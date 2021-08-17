/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Landing from "../pages/Landing/Landing";
import Tabs from "./tabs";

export default function Router() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
