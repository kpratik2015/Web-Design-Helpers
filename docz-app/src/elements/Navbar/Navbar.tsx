import React from "react";
import NavbarCulturist from "./NavbarCulturist";
import NavbarCulturistMobile from "./NavbarCulturistMobile";

/**Reference: https://www.thecultureist.com/# */

interface IProps {
  navType?: string;
  isMobileView?: boolean;
}

const Navbar: React.FC<IProps> = (props) => {
  const { navType = "1", isMobileView = false } = props;
  switch (navType) {
    case "1":
      return isMobileView ? (
        <NavbarCulturistMobile {...props} />
      ) : (
        <NavbarCulturist {...props} />
      );
    default:
      return <NavbarCulturist {...props} />;
  }
};

export default Navbar;
