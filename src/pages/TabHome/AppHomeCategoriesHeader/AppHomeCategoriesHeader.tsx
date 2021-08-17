import React from "react";
import "./AppHomeCategoriesHeader.scss";

const AppHomeCategoriesHeader: React.FC = () => {
  return (
    <div className="AppHomeCategoriesHeader">
      <div className="CategoryHeader">
        <h2>Topics</h2>
        <p>View all</p>
      </div>
      <div className="CategorySubHeader">
        <p>Most Popular</p>
      </div>
    </div>
  );
};

export default AppHomeCategoriesHeader;
