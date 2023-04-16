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
            className="ui centered large image"
            src={hellostranger4}
            alt="Hello Stranger"
          />
          <p
            style={{
              fontSize: "2em",
              color: "#FFC857",
              textAlign: "center",
            }}
          >
            “If you see someone without a smile, give them one of yours.” -
            Dolly Parton
          </p>
          <p
            style={{
              fontSize: "2em",
              color: "#FFC857",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Welcome to Hello Stranger! Just like a traditional library, we are a
            place of knowledge and exploration. But instead of books, our
            library is filled with human stories. Our goal is to break down
            barriers and promote understanding by connecting you with
            individuals who have unique experiences and perspectives. Whether
            you're here to learn, grow, or just connect with others, we're
            thrilled to have you as a part of our community. So come on in,
            browse our "shelves", and discover the human stories waiting to be
            heard. We can't wait to share them with you!
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
