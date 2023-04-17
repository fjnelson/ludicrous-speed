import React from "react";

import { Dropdown, Card, Icon, Button } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import { useState } from "react";

import "slick-carousel/slick/slick-theme.css";
const PostList = ({ posts, title }) => {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [likes, setLikes] = useState({});
  const [numLikes, setNumLikes] = useState(0);

  const handleLike = (postText) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postText]: !prevLikes[postText],
    }));
    setNumLikes((prevNumLikes) => prevNumLikes + 1);
  };


  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div style={{ flex: "1", marginLeft: "5em" }}>
      <h1>Search Posts:</h1>
      <Dropdown
        placeholder="Select Author"
        selection
        options={posts}
        onChange={(_, { value }) => setSelectedAuthor(value)}
      />
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {post.postAuthor} <br />
                <span style={{ fontSize: "1rem" }}>
                  posted this on {post.createdAt}
                </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{post.postText}</p>
              </div>
              <Card.Content extra>
                <Button
                  floated="right"
                  onClick={() => handleLike(post.postText)}
                  icon
                  labelPosition="left"
                  color={likes[post.postText] ? "red" : undefined}
                >
                  <Icon name="like" />
                  <span style={{ marginLeft: "5px" }}>
                    {likes[post.postText] ? "Liked" : "Like"}
                  </span>
                  {likes[post.postText] && <Icon name="heart" color="red" />}
                </Button>
              </Card.Content>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
