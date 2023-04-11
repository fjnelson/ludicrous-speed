import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

export default function LogIn() {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button
              style={{ backgroundColor: "orange", color: "white" }}
              size="large"
            >
              Log In
            </Button>
          </Segment>
        </Form>
        <p style={{ marginTop: "1em" }}>
          Don't have an account yet?
          <Button
            style={{ backgroundColor: "orange", color: "white" }}
            size="large"
            onClick={() => (window.location.href = "/NewAccount")}
          >
            Sign Up
          </Button>
        </p>
      </Grid.Column>
    </Grid>
  );
}
