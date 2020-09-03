import React from "react";
import SideNav from "react-simple-sidenav";
import SidenavItems from "./SidenavItems";

const Nav = ({ showNav, onHideNav }) => {
  return (
    <SideNav
      showNav={showNav}
      onHideNav={onHideNav}
      navStyle={{ background: "#242424", maxWidth: "220px" }}
    >
      <SidenavItems />
    </SideNav>
  );
};

export default Nav;
