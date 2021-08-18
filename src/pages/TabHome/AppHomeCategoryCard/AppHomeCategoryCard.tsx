import { title } from "process";
import React from "react";
import { ITopic } from "../../../models/topic";

import "./AppHomeCategoryCard.scss";

interface Props {
  topic?: ITopic;
  onPress: (ev: any) => void | any;
}

const AppHomeCategoryCard: React.FC<Props> = ({ topic, onPress }) => {
  return (
    <div className="AppHomeCategoryCard">
      <div className="ImageContainer" onClick={onPress}>
        <img src={topic?.cover_photo?.urls?.regular} alt="" />
        <div className="titleText">
          <p>{topic?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default AppHomeCategoryCard;
