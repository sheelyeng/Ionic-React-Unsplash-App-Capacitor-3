import React, { useEffect, useState } from "react";
import ReactPhotoGrid from "react-photo-grid";

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
  const [photoList, setPhotoList] = useState([]);
  useEffect(() => {
    let previewsArr: any = [];
    const previewPhotos = item?.preview_photos;
    previewsArr = previewPhotos?.map((item: any) => {
      return item?.urls.small;
    });
    setPhotoList(previewsArr);
  }, []);

  return (
    <div className="AppCollectionItem">
      <div className="PostHeader">
        <div className="InfoWrapper">
          <h2>{item?.title}</h2>
          <p>
            {item?.total_photos} Photos · Curated by {item?.user?.username}
          </p>
        </div>
        <div className="TagWrapper">
          {item?.tags &&
            item?.tags.map((tag, index) => (
              <AppTag title={tag.title} key={index} />
            ))}
        </div>
      </div>
      <div className="ImageContainer">
        {photoList && (
          <ReactPhotoGrid
            onImageClick={onPressImage}
            data={photoList}
            gridSize="250x170"
          />
        )}
      </div>
    </div>
  );
};

export default AppCollectionItem;
