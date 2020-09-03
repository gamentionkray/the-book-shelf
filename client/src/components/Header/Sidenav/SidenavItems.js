import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const SidenavItems = () => {
  const user = useSelector((state) => state.user);

  const Items = [
    {
      type: "navItem",
      Icon: FaHome,
      text: "Home",
      link: "/",
      restricted: false,
    },
    {
      type: "navItem",
      Icon: FaFileAlt,
      text: "My Profile",
      link: "/user",
      restricted: true,
    },
    {
      type: "navItem",
      Icon: FaFileAlt,
      text: "Add Admins",
      link: "/user/register",
      restricted: true,
    },
    {
      type: "navItem",
      Icon: FaSignInAlt,
      text: "Login",
      link: "/login",
      restricted: false,
      exclude: true,
    },
    {
      type: "navItem",
      Icon: FaFileAlt,
      text: "My Reviews",
      link: "/user/userReviews",
      restricted: true,
    },
    {
      type: "navItem",
      Icon: FaFileAlt,
      text: "Add Reviews",
      link: "/user/add",
      restricted: true,
    },
    {
      type: "navItem",
      Icon: FaSignOutAlt,
      text: "Logout",
      link: "/user/logout",
      restricted: true,
    },
  ];

  const elements = (Item, i) => (
    <div key={i} className={Item.type}>
      <Link to={Item.link}>
        <Item.Icon />
        {` ${Item.text}`}
      </Link>
    </div>
  );

  const showItems = () =>
    user.login
      ? Items.map((Item, i) => {
          if (user.login.isAuth) {
            return !Item.exclude ? elements(Item, i) : null;
          } else {
            return !Item.restricted ? elements(Item, i) : null;
          }
        })
      : null;

  return <div>{showItems()}</div>;
};

export default SidenavItems;
