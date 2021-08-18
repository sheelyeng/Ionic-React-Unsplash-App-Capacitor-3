import { IonApp, setupConfig } from "@ionic/react";

/* Theme variables */
import "./theme/shared.scss";
import "./theme/variables.scss";

import Router from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./stores";

setupConfig({
  backButtonText: "",
  rippleEffect: false,
});

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IonApp>
        <Router />
      </IonApp>
    </PersistGate>
  </Provider>
);

export default App;
