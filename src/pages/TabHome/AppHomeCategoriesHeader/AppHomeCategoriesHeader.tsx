import React from "react";
import "./AppHomeCategoriesHeader.scss";

interface Props {
  onViewAllPress?: () => void;
}

const AppHomeCategoriesHeader: React.FC<Props> = ({ onViewAllPress }) => {
  return (
    <div className="AppHomeCategoriesHeader">
      <div className="CategoryHeader">
        <h2>Topics</h2>
        <p onClick={onViewAllPress}>View all</p>
      </div>
      <div className="CategorySubHeader">
        <p>Most Popular</p>
      </div>
    </div>
  );
};

export default AppHomeCategoriesHeader;
