import React from "react";
import { ITopic } from "../../models/topic";

import "./TopicDetailInformation.scss";

interface Props {
  topic?: ITopic | null;
  showLoading?: boolean;
}

const TopicDetailInformation: React.FC<Props> = ({ topic, showLoading }) => {
  return (
    <div className="TopicDetailInformation">
      <h2>{topic?.title}</h2>
      <div
        className="html"
        dangerouslySetInnerHTML={{
          __html: String(topic?.description),
        }}
      ></div>
    </div>
  );
};

export default TopicDetailInformation;
