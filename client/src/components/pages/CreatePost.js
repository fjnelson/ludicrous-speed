import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";

import Auth from "../../utils/auth";

export default function CreatePost() {
  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
    // navigate('/');
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 800 }}>
        <Header as="h1" color="orange" textAlign="center">
          Create a Post!
        </Header>
        {Auth.loggedIn() ? (
          <>
            <p
              className={`m-0 ${
                characterCount === 280 || error ? "text-danger" : ""
              }`}
            >
              Character Count: {characterCount}/280
            </p>
            <Form size="large" onSubmit={handleFormSubmit}>
              <Segment stacked>
                <Form.Field>
                  <label>Content:</label>
                  <textarea
                    style={{ width: "100%" }}
                    name="postText"
                    resize="both"
                    value={postText}
                    onChange={handleChange}
                  ></textarea>
                </Form.Field>
                <Button
                  style={{ backgroundColor: "orange", color: "white" }}
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          </>
        ) : (
          <p>
            You need to be logged in to share your thoughts. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </Grid.Column>
    </Grid>
  );
}
