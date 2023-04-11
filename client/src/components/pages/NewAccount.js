import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NewAccount() {

  const handleCreateAccountClick = () => {
    console.log("Account created");
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Create a New Account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Full Name"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="mail"
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
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
            />

            <Button
              style={{ backgroundColor: "orange", color: "white" }}
              size="large"
              onClick={handleCreateAccountClick}
            >
              Create Account
            </Button>
          </Segment>
        </Form>
        <p style={{ marginTop: "1em" }}>
          Already have an account?
          <Link to="/LogIn">
            <Button
              style={{ backgroundColor: "orange", color: "white" }}
              size="large"
            >
              Log In
            </Button>
          </Link>
        </p>
      </Grid.Column>
    </Grid>
  );
}