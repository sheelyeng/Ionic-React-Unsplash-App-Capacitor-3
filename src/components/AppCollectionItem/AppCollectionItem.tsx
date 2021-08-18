import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from "@ionic/react";
import React from "react";
// import ReactPhotoGrid from "react-photo-grid";
import { ReactPhotoCollage } from "react-photo-collage";

import { ICollection } from "../../models/collection";
import AppTag from "../AppTag/AppTag";

import "./AppCollectionItem.scss";

interface Props {
  index?: number;
  item?: ICollection;
  onPressImage: () => void;
  onPressTitle?: () => void;
}

const AppCollectionItem: React.FC<Props> = ({
  index,
  item,
  onPressImage,
  onPressTitle,
}) => {
  // const previewsArr: any = item?.preview_photos?.map((item: any) => {
  //   return item?.urls.small;
  // });
  const previewsArr: any = item?.preview_photos?.map((item: any) => {
    return {
      source: item?.urls.small,
    };
  });
  const setting = {
    width: "100%",
    height: ["250px", "120px"],
    layout: [1, 3],
    photos: previewsArr,
    showNumOfRemainingPhotos: true,
  };

  return (
    <IonCard className="AppCollectionItem">
      <IonCardHeader className="InfoWrapper PostHeader">
        <IonCardTitle>{item?.title}</IonCardTitle>
        <IonCardSubtitle>
          {item?.total_photos} Photos · Curated by {item?.user?.username}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonItem lines="none">
        <div className="TagWrapper">
          {item?.tags &&
            item?.tags.map((tag, index) => (
              <AppTag title={tag.title} key={index} />
            ))}
        </div>
      </IonItem>
      <div className="ImageContainer">
        {/* {previewsArr && (
          <ReactPhotoGrid
            onImageClick={onPressImage}
            data={previewsArr}
            containerWidth={window.innerWidth}
          />
        )} */}
        <ReactPhotoCollage {...setting} />
      </div>
    </IonCard>
  );
};

export default AppCollectionItem;
