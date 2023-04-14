import React from "react";
import { Grid, Button } from "semantic-ui-react";
import hellostranger4 from "../images/hellostranger-04.jpg";

export default function Home() {
  return (
    <body style={{ backgroundColor: "#25495f" }}>
      //<div style={{ height: "100vh"}}>
        <div>
          <img src={hellostranger4} className="picture" />
          <p style={{ fontSize: "2em", color: "#FFC857", textAlign: "center" }}>
            “If you see someone without a smile, give them one of yours.” -
            Dolly Parton - Helen Evans
          </p>
        </div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Button></Button>
            </Grid.Column>
            <Grid.Column>
              <Button>Hello 2</Button>
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
      //</div>
    //</body>
  );
}