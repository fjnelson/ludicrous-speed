import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import PostList from "./postList";

import { QUERY_ALL_POSTS } from "../../utils/queries";

const SimpleSlider = () => {
  const { loading, data } = useQuery(QUERY_ALL_POSTS);
  const posts = data?.posts || [];

  return (
    <div
      style={{  display: "flex", flexDirection: "row-reverse" }}
    >
 
        <div>
          <Card.Group>
            <Card.Content>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} title="Some Feed for Thought(s)..." />
              )}
            </Card.Content>
          </Card.Group>
        </div>

    </div>
  );
};

export default SimpleSlider;
