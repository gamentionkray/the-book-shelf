import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "./Sidenav/Sidenav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const onHideNav = () => {
    setShowNav(false);
  };

  return (
    <header>
      <div className="open_nav">
        <FaBars
          style={{ color: "#ffffff", padding: "10px", cursor: "pointer" }}
          onClick={() => setShowNav(true)}
        />{" "}
      </div>
      <Nav showNav={showNav} onHideNav={() => onHideNav()} />
      <Link to="/" className="logo">
        The Bookshelf
      </Link>
    </header>
  );
};

export default Header;
