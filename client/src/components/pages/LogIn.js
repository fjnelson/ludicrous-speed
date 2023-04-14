import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LOGIN } from '../../utils/mutations';
import AuthService from '../../utils/auth';
export default function LogIn() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      AuthService.login(token);
    } catch (e) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="email"
              placeholder="E-mail address"
              type="email"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"

              placeholder="password"
              onChange={handleChange}
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
            <Link to="/signup" style={{ color: "white" }}>
              Sign Up
            </Link>
          </Button>
        </p>
      </Grid.Column>
    </Grid>
  );
}