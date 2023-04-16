import React from "react";
import Slider from "react-slick";
import { useQuery } from '@apollo/client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown, Card, Icon, Button } from "semantic-ui-react";
import { useState } from "react";

import PostList from "./postlist";
// import ThoughtForm from '../components/ThoughtForm';

import { QUERY_ALL_POSTS } from "../../utils/queries";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const { loading, data } = useQuery(QUERY_ALL_POSTS);
  const posts = data?.posts || [];

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

  const filteredPosts = posts
    .flatMap((friend) => friend.posts)
    .filter((post) => post.postAuthor === selectedAuthor);

  return (
    <div
      style={{ height: "100vh", display: "flex", flexDirection: "row-reverse" }}
    >
      <div style={{ flex: "1", marginLeft: "5em" }}>
        <h1>Search Posts:</h1>
        <Dropdown
          placeholder="Select Author"
          selection
          options={posts}
          onChange={(_, { value }) => setSelectedAuthor(value)}
        />
        {selectedAuthor && (
          <div>
            <h2>Posts by {selectedAuthor}:</h2>
            <p>Total likes: {numLikes}</p>
            <Card.Group>
              {filteredPosts.map((posts) => (
                <Card key={posts.postText}>
                  <Card.Content>
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <PostList
                        thoughts={posts}
                        title="Some Feed for Thought(s)..."
                      />
                    )}
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      floated="right"
                      onClick={() => handleLike(posts.postText)}
                      icon
                      labelPosition="left"
                      color={likes[posts.postText] ? "red" : undefined}
                    >
                      <Icon name="like" />
                      <span style={{ marginLeft: "5px" }}>
                        {likes[posts.postText] ? "Liked" : "Like"}
                      </span>
                      {likes[posts.postText] && (
                        <Icon name="heart" color="red" />
                      )}
                    </Button>
                  </Card.Content>
                </Card>
               ))} 
            </Card.Group>
          </div>
        )}
      </div>
      <Slider {...settings} style={{ flex: "1" }}>
        {posts.map((friend) =>
          friend.posts.map((post, index) => (
            <div key={`${friend.key}_${index}`} style={{ height: "100vh" }}>
              <h3>{post.postText}</h3>
              <p>By {post.postAuthor}</p>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
