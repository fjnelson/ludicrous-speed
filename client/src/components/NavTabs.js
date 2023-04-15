import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import HandYellow from "./images/Hand-yellow.png";
import Auth from "../utils/auth";

export default function NavTabs() {
  const location = useLocation();
  console.log(location);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
  
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>

        </ul>
      );
    } else {
      return (
        <ul className="flex-row">

            <Link to="/login">Login</Link>

        </ul>
      );
    }
  }

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
      </Menu.Menu>
      <Menu.Item /> {showNavigation()}
    </Menu>
  );
}
