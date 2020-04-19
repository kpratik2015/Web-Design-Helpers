import React from "react";
import TabsTypeOne from "./TabsTypeOne";

interface IProps {
  tabType?: string;
}

const Navbar: React.FC<IProps> = (props) => {
  const { tabType = "1" } = props;
  switch (tabType) {
    case "1":
      return <TabsTypeOne {...props} />;
    default:
      return <TabsTypeOne {...props} />;
  }
};

export default Navbar;
