import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import AppTag from "../../../components/AppTag/AppTag";
import { IProfileImage, ITag } from "../../../models/generic";
import AppUserProfileFollowerFollowing from "../AppUserProfileFollowerFollowing/AppUserProfileFollowerFollowing";
import AppUserProfileFollowMessage from "../AppUserProfileFollowMessage/AppUserProfileFollowMessage";

import "./AppUserProfileDetail.scss";

interface Props {
  name?: string;
  username?: string;
  bio?: string;
  location?: string;
  tags?: ITag[];
  followers_count?: number;
  following_count?: number;
  profile_image?: IProfileImage;
}

const AppUserProfileDetail: React.FC<Props> = ({
  name,
  username,
  profile_image,
  followers_count,
  following_count,
  tags,
}) => {
  return (
    <div className="AppUserProfileDetail">
      <IonItem lines="none">
        <IonAvatar slot="start">
          <img src={profile_image?.large} alt="" />
        </IonAvatar>
        <IonLabel>
          <h2>{name}</h2>
          <p>{username}</p>
          <div className="TagsWrapper">
            {tags &&
              tags.map((tag: any, index: number) => (
                <AppTag title={tag.title} key={index} />
              ))}
          </div>
        </IonLabel>
      </IonItem>
      <div className="ActionContainer">
        <AppUserProfileFollowerFollowing
          followers_count={followers_count}
          following_count={following_count}
        />
        <AppUserProfileFollowMessage />
      </div>
    </div>
  );
};

export default AppUserProfileDetail;
