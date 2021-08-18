import React from "react";

import "./AppUserProfileFollowerFollowing.scss";

interface Props {
  followers_count?: number;
  following_count?: number;
}

const AppUserProfileFollowerFollowing: React.FC<Props> = ({
  followers_count,
  following_count,
}) => {
  return (
    <div className="AppUserProfileFollowerFollowing">
      <div className="FollowerFollowingView">
        <div className="FollowerFollowingCount">{followers_count}</div>
        <div className="FollowerFollowingText">Followers</div>
      </div>
      <div className="FollowerFollowingView">
        <div className="FollowerFollowingCount">{following_count}</div>
        <div className="FollowerFollowingText">Following</div>
      </div>
    </div>
  );
};

export default AppUserProfileFollowerFollowing;
