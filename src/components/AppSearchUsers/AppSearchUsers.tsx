import { IonList } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { IUser } from "../../models/user";
import AppUserItem from "../AppUserItem/AppUserItem";

interface Props {
  refreshing: boolean;
  UsersArr: any[];
}

const AppSearchUsers: React.FC<Props> = ({ UsersArr }) => {
  const navigate = useHistory();

  const onUserPress = (username: string) => {
    navigate.push("/main/user-profile", {
      username,
    });
  };

  return (
    <IonList>
      {UsersArr &&
        UsersArr.map((item: IUser, index) => (
          <AppUserItem
            key={index}
            id={item.id}
            name={item.name}
            username={item.username}
            profile_image={item.profile_image}
            onPress={() => onUserPress(item.username)}
          />
        ))}
    </IonList>
  );
};

export default AppSearchUsers;
