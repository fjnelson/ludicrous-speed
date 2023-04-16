import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(error);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "80vh", width:"100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Create a New Account
        </Header>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <Form size="large" onSubmit={handleFormSubmit}>
            <Segment stacked>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />

              <Button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  cursor: "pointer",
                }}
                size="large"
                type="submit"
              >
                Create Account
              </Button>
            </Segment>
          </Form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
