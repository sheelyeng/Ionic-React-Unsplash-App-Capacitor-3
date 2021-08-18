import { IonList } from "@ionic/react";
import React from "react";
import { ICollection } from "../../models/collection";
import AppCollectionItem from "../AppCollectionItem/AppCollectionItem";
import "./AppSearchCollections.scss";

interface Props {
  refreshing: boolean;
  onPressImage: (ev?: any) => void;
  onPressTitle: (ev?: any) => void;
  CollectionsArr?: any[] | null;
}

const AppSearchCollections: React.FC<Props> = ({
  refreshing,
  onPressImage,
  onPressTitle,
  CollectionsArr,
}) => {
  return (
    <IonList>
      {CollectionsArr &&
        CollectionsArr.map((collection: ICollection, index) => (
          <AppCollectionItem
            key={index}
            item={collection}
            onPressImage={() => onPressImage(collection.id)}
            onPressTitle={() => onPressTitle(collection.id)}
          />
        ))}
    </IonList>
  );
};

export default AppSearchCollections;
