import { Storage, Drivers } from "@ionic/storage";
import * as CordovaSQLiteDriver from "localforage-cordovasqlitedriver";

const store = new Storage({
  driverOrder: [
    CordovaSQLiteDriver._driver,
    Drivers.IndexedDB,
    Drivers.LocalStorage,
  ],
});
store.create();

const set = async (key: string, val: any) => {
  return await store.set(key, JSON.stringify(val));
};

const remove = (key: string) => {
  return store.remove(key);
};

const get = async (key: string) => {
  try {
    const json: any = await store.get(key);
    return JSON.parse(json);
  } catch {
    return null;
  }
};

const StorageService = () => {
  return {
    set,
    remove,
    get,
  };
};

export default StorageService;
