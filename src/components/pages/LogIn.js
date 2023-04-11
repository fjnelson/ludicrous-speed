import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the email and password, e.g. send it to the server
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <Button
              style={{ backgroundColor: "orange", color: "white" }}
              size="large"
              type="submit"
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
          >
            <Link to="/new-account" style={{ color: "white" }}>
              Sign Up
            </Link>
          </Button>
        </p>
      </Grid.Column>
    </Grid>
  );
}