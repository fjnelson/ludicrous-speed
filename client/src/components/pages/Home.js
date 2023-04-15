import React from "react";
import { Grid, Button } from "semantic-ui-react";
import hellostranger4 from "../images/hellostranger-04.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [setShowNav] = useState(false);
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
            Dolly Parton - Helen Evans
          </p>
        </div>
        <Grid columns={2} class="buttonGrid">
          <Grid.Row>
            <Grid.Column>
              <NavLink
                class="ui right floated button"
                activeclassname="CreatPost"
                to="/create"
                className="creatButton"
                onClick={() => setShowNav(false)}
              >
                Create Post
              </NavLink>
            </Grid.Column>
            <Grid.Column>
              <NavLink
                activeclassname="Profile"
                to="/account"
                className="porfileButton"
                onClick={() => setShowNav(false)}
              >
                Veiw Profile
              </NavLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button>Hello 3</Button>
            </Grid.Column>
            <Grid.Column>
              <Button>Hello 4</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </body>
  );
}
