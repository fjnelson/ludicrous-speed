import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import HandYellow from "./images/Hand-yellow.png";
import "../App.css";

export default function NavTabs() {
  const location = useLocation();
  console.log(location);

  return (
    <Menu
      inverted
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#255f85",
        maxHeight: "100px",
        padding: "2rem",
      }}
    >
      <Menu.Item header>
        <img src={HandYellow} alt="Hello Stranger" />
      </Menu.Item>
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
        <Menu.Item
        as={Link}
        to="/AnonymousPost"
        name="AP"
        active={location.pathname === "/AnonymousPost"}
        id="AP"
      />
      </Menu.Menu>
      <Menu.Item
        as={Link}
        to="/login"
        name="Login"
        active={location.pathname === "/login"}
        id="login"
      />
      <a class="item">
        <i class="bars icon" 
        name="Hamburger" 
        id="Hamburger" 
        />
      </a>
    </Menu>
  );
}
