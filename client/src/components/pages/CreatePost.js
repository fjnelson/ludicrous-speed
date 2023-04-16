import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "semantic-ui-react";
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
    <div style={{ height: "100vh" }}>
      <h1>Create Post</h1>
      <p>What's on your mind?</p>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <Form onSubmit={handleFormSubmit}>
            {/* <Form.Field>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleFormSubmit} />
        </Form.Field> */}

            {/* <Form.Field>
          <label>Description:</label>
          <input type="text" value={Text} onChange={handleChange} />
        </Form.Field> */}

            <Form.Field>
              <label>Content:</label>
              {/* control how high the text box is, currently 30 */}
              {/* control how wide the text box is, currently 50% */}
              <textarea
                style={{ width: "50%" }}
                rows="30"
                name="postText"
                value={postText}
                onChange={handleChange}
              ></textarea>
            </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}
