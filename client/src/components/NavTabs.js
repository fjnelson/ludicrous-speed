import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";


export default function NavTabs() {
  const location = useLocation();
  console.log(location);

  return (
    <Menu inverted style={{ display: "flex", justifyContent: "space-between" }}>
      <Menu.Item header>Hello Stranger (image)</Menu.Item>
      <Menu.Menu id="menu-items">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={location.pathname === "/"}
        />
        <Menu.Item
          as={Link}
          to="/create"
          name="Create Post"
          active={location.pathname === "/create"}
        />
        <Menu.Item
          as={Link}
          to="/account"
          name="User Accounts"
          active={location.pathname === "/account"}
        />
      </Menu.Menu>
      <Menu.Item
        as={Link}
        to="/login"
        name="Login"
        active={location.pathname === "/login"}
        id="login"
      />
    </Menu>
  );
}
