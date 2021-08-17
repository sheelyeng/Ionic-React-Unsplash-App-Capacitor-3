import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducer";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefault) {
    const defaultMiddlewares = getDefault({
      serializableCheck: {
        ignoredActions: [
          "persist/REGISTER",
          "persist/REHYDRATE",
          "persist/PERSIST",
        ],
      },
    }).concat(thunk);
    return defaultMiddlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
const persistor = persistStore(store);
export { store, persistor };
