import React from "react";
import { Menu, Grid, Button } from "semantic-ui-react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function SideBar() {
  const location = useLocation();
  console.log(location);
  const [setShowNav] = useState(false);

  return (
    <div>
      <div className="hamburgerDiv" class="ui vertical buttons">
        <Button>
          <NavLink
            activeclassname="CreatPost"
            to="/create"
            className="creatButton"
            onClick={() => setShowNav(false)}
          >
            Create Post
          </NavLink>
        </Button>
        <Button>
          <NavLink
            activeclassname="Profile"
            to="/account"
            className="porfileButton"
            onClick={() => setShowNav(false)}
          >
            Veiw Profile
          </NavLink>
        </Button>
        <NavLink
          activeclassname="CreatPost2"
          to="/AnonymousPost"
          className="creatButton2"
          onClick={() => setShowNav(false)}
        >
          Create Anonymos Post
        </NavLink>
        <NavLink
          activeclassname="ViewPosts"
          to=""
          className="StoriesButton"
          onClick={() => setShowNav(false)}
        >
          Stories
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
