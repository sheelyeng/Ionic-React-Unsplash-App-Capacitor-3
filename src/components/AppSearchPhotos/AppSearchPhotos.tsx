import React from "react";
import { IPhoto } from "../../models/photo";
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";

import "./AppSearchPhotos.scss";

interface Props {
  refreshing: boolean;
  PhotosArr?: IPhoto[];
}

const AppSearchPhotos: React.FC<Props> = ({ refreshing, PhotosArr }) => {
  const onImagePress = (id: string) => {};

  return (
    <IonGrid className="AppSearchPhotos">
      <IonRow>
        {PhotosArr?.map((item, index) => (
          <IonCol key={index} sizeLg="4" sizeMd="4" sizeXs="4">
            <div
              className="img-box"
              style={{
                backgroundImage: `url(${item?.urls.small})`,
              }}
            ></div>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default AppSearchPhotos;
