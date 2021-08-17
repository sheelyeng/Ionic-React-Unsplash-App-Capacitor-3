import { IonBadge } from "@ionic/react";
import React from "react";
import "./AppTag.scss";

interface Props {
  title: string;
}

const AppTag: React.FC<Props> = ({ title }) => {
  return <IonBadge className="AppTag">{title}</IonBadge>;
};

export default AppTag;
