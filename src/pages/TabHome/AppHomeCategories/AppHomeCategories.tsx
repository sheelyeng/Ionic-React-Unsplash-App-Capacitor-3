import { IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ITopic } from "../../../models/topic";
import AppHomeCategoryCard from "../AppHomeCategoryCard/AppHomeCategoryCard";

import "./AppHomeCategories.scss";

interface Props {
  topics?: ITopic[];
  showLoading?: boolean;
  onPress: (ev: any) => void;
}

const slideOpts = {
  slidesPerView: 3.1,
};

const AppHomeCategories: React.FC<Props> = ({
  topics,
  onPress,
  showLoading,
}) => {
  return (
    <div className="AppHomeCategories">
      <IonSlides options={slideOpts}>
        {topics &&
          topics.map((topic: ITopic, index) => (
            <IonSlide key={index}>
              <AppHomeCategoryCard
                topic={topic}
                key={index}
                onPress={() => onPress(topic.id)}
              />
            </IonSlide>
          ))}
      </IonSlides>
    </div>
  );
};

export default AppHomeCategories;
