import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Card } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    posts: [
      {
        postText: "I just finished reading a great book on React!",
        postAuthor: "Jenny Hess",
      },
      {
        postText: "I love hiking in the mountains on the weekends.",
        postAuthor: "Jenny Hess",
      },
    ],
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    posts: [
      {
        postText: "Working on a new feature for our app.",
        postAuthor: "Elliot Fu",
      },
      {
        postText: "Just finished a marathon last weekend.",
        postAuthor: "Elliot Fu",
      },
    ],
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    posts: [
      {
        postText:
          "I tried a new recipe for chicken curry and it turned out great!",
        postAuthor: "Stevie Feliciano",
      },
      {
        postText: "Spent the day at the beach with some friends.",
        postAuthor: "Stevie Feliciano",
      },
    ],
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    posts: [
      {
        postText: "I just started learning Python, any tips?",
        postAuthor: "Christian",
      },
      {
        postText: "Finally got around to organizing my closet today.",
        postAuthor: "Christian",
      },
    ],
  },
];

const DropdownExampleInline = () => {
  const [selectedFriend, setSelectedFriend] = useState(friendOptions[0]);

  const handleFriendSelection = (e, { value }) => {
    setSelectedFriend(friendOptions.find((friend) => friend.value === value));
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1>User Accounts</h1>
      <span>
        Show me posts by{" "}
        <Dropdown
          inline
          options={friendOptions}
          defaultValue={friendOptions[0].value}
          onChange={handleFriendSelection}
        />
      </span>
      <br />
      <br />
      <Card.Group>
        {selectedFriend.posts.map((post, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{post.postAuthor}</Card.Header>
              <Card.Description>{post.postText}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div style={{ marginTop: "40px" }}>
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  );
};

export default DropdownExampleInline;
