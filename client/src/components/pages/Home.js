import React from "react";
// import { Grid, Button } from "semantic-ui-react";
import hellostranger4 from "../images/hellostranger-04.jpg";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

export default function Home() {
  // const [setShowNav] = useState(false);
  return (
    <body style={{ backgroundColor: "#25495f" }}>
      <div style={{ height: "100vh" }}>
        <div class="ui segment" style={{ backgroundColor: "#25495f" }}>
          <img
            class="ui centered large image"
            src={hellostranger4}
            alt="Hello Stranger"
          />
          <p style={{ fontSize: "2em", color: "#FFC857", textAlign: "center" }}>
            “If you see someone without a smile, give them one of yours.” -
            Dolly Parton
          </p>
        </div>
    {/*<div class="two ui buttons">
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
        </div>
        <div class="two ui buttons">
          <NavLink
            activeclassname="CreatPost"
            to="/create"
            className="creatButton"
            onClick={() => setShowNav(false)}
          >
            Create Post
          </NavLink>
          <NavLink
            activeclassname="Profile"
            to="/account"
            className="porfileButton"
            onClick={() => setShowNav(false)}
          >
            Veiw Profile
          </NavLink>
        </div>
        */}
      </div>
    </body>
  );
}