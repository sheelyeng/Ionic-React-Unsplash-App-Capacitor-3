import React from "react";

import LogoImage from "../../assets/svg/Unsplash_Logo_Full.svg";
import LogoImageWhite from "../../assets/svg/Unsplash_Logo_Full_White.svg";

interface Props {
  color?: "dark" | "white" | undefined;
  height?: number;
  width?: number;
}

const AppHeaderLogo: React.FC<Props> = ({ color, height, width }) => {
  const getProps = () => {
    return {
      height: !!height ? height : 60,
      width: !!width ? width : 250,
    };
  };

  const renderLogo = () => {
    if (color === "dark") {
      return <img src={LogoImage} alt="" {...getProps()} />;
    } else {
      return <img src={LogoImageWhite} alt="" {...getProps()} />;
    }
  };

  return !!color ? (
    renderLogo()
  ) : (
    <img src={LogoImageWhite} alt="" {...getProps()} />
  );
};

export default AppHeaderLogo;
