import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import { addCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import AppHeaderLogo from "../../components/AppHeaderLogo/AppHeaderLogo";
import AppSearchPhotos from "../../components/AppSearchPhotos/AppSearchPhotos";
import { MAX_PER_PAGE } from "../../constants";
import { useAppDispatch } from "../../stores";
import {
  getUserCollections,
  getUserLikedPhotos,
  getUserPhotos,
  getUserPublicProfile,
} from "../../stores/middleware/users";
import { usersSelectors } from "../../stores/slices/usersSlice";
import AppUserProfileDetail from "./AppUserProfileDetail/AppUserProfileDetail";
import AppUserProfileSegment from "./AppUserProfileSegment/AppUserProfileSegment";

import "./UserProfile.scss";
import AppSearchCollections from "../../components/AppSearchCollections/AppSearchCollections";

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [currentPhotoPage, setCurrentPhotoPage] = useState(1);
  const [currentLikedPhotoPage, setCurrentLikedPhotoPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [headerTitle, setHeaderTitle] = useState<string | null | undefined>("");
  const [userId, setUserId] = useState<string>("");

  const dispatch = useAppDispatch();
  const location = useLocation();
  const userProfile = useSelector(usersSelectors.publicUser);
  const PhotosArr = useSelector(usersSelectors.publicUserPhotos);
  const LikesArr = useSelector(usersSelectors.publicUserLikedPhotos);
  const CollectionsArr = useSelector(usersSelectors.publicUserCollectionPhotos);


  const initProfile = async (username: string, isRefreshing = false) => {
    await dispatch(getUserPublicProfile(username));

    dispatch(
      getUserPhotos({
        username,
        params: {
          page: currentPhotoPage,
          per_page: MAX_PER_PAGE,
          order_by: "latest",
        },
      })
    );

    dispatch(
      getUserLikedPhotos({
        username,
        params: {
          page: currentLikedPhotoPage,
          per_page: MAX_PER_PAGE,
          order_by: "latest",
        },
      })
    );

    dispatch(
      getUserCollections({
        username,
        params: {
          page: currentLikedPhotoPage,
          per_page: MAX_PER_PAGE,
        },
      })
    );

    setHeaderTitle(userProfile?.name);
    console.log("userProfile: ", userProfile);
    if (isRefreshing) {
      setRefreshing(false);
    }
  };

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true);

    initProfile(userId, true);
    event.detail.complete();
  };

  useEffect(() => {
    const params: any = location.state;
    if (params && params.username) {
      setUserId(params.username);
      initProfile(params.username);
    }
  }, [location]);

  const onPressImage = () => {};

  const onCollectionPressImage = () => {};

  const onCollectionPressTitle = () => {};

  const getProfileProps = () => {
    return {
      name: userProfile?.name,
      username: userProfile?.username,
      bio: userProfile?.bio,
      location: userProfile?.location,
      tags: userProfile?.tags?.custom,
      followers_count: userProfile?.followers_count,
      following_count: userProfile?.following_count,
      profile_image: userProfile?.profile_image,
    };
  };

  return (
    <IonPage className="UserProfile">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <AppHeaderLogo color="dark" height={30} width={115} />
          </IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" icon={addCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AppUserProfileDetail {...getProfileProps()} />
        <AppUserProfileSegment
          total_collections={userProfile?.total_collections}
          total_likes={userProfile?.total_likes}
          total_photos={userProfile?.total_photos}
          activeIndex={activeTab}
          onChange={setActiveTab}
        />
        {activeTab === "0" && PhotosArr && (
          <AppSearchPhotos refreshing={refreshing} PhotosArr={PhotosArr} />
        )}
        {activeTab === "1" && LikesArr && (
          <AppSearchPhotos refreshing={refreshing} PhotosArr={LikesArr} />
        )}
        {activeTab === "2" && CollectionsArr && (
          <AppSearchCollections
            refreshing={refreshing}
            onPressImage={onCollectionPressImage}
            CollectionsArr={CollectionsArr}
            onPressTitle={onCollectionPressTitle}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
