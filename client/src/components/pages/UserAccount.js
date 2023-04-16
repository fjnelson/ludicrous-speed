import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown, Card, Icon, Button } from "semantic-ui-react";
import { useState } from "react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    posts: [
      {
        postText:
          "I just finished reading an amazing book on React that really expanded my understanding of the framework. The author had a clear and concise writing style that made even the most complex topics easy to understand. I can't wait to put what I learned into practice on my next project!",
        postAuthor: "Jenny Hess",
      },
      {
        postText:
          "Last weekend, I went on a challenging hike in the mountains with some friends. We were rewarded with breathtaking views at the summit and the sense of accomplishment that comes with pushing ourselves physically. It was a great reminder that sometimes the best things in life require effort and perseverance.",
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
        postText:
          "I'm currently working on a new feature for our app that I'm really excited about. It's been challenging, but I'm learning a lot and feel like the end result will be a huge improvement over our current version. I love the feeling of making progress on a project and can't wait to see it come to life!",
        postAuthor: "Elliot Fu",
      },
      {
        postText:
          "Last weekend, I ran my first marathon and it was an amazing experience! The training was tough, but I felt strong and focused on race day. Crossing the finish line was a huge accomplishment and reminded me that anything is possible with hard work and determination.",
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
          "I recently tried a new recipe for chicken curry that turned out absolutely delicious! It was a bit spicy, but had so many complex flavors that blended together perfectly. Cooking is such a creative and rewarding activity for me, and I love discovering new recipes to try out.",
        postAuthor: "Stevie Feliciano",
      },
      {
        postText:
          "Over the weekend, I spent the day at the beach with some of my closest friends. We swam, played beach volleyball, and had a great time soaking up the sun. Being near the ocean always puts me in a relaxed and peaceful state of mind, and spending time with friends just made it even better.",
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
        postText:
          "I just started learning Python and I'm really enjoying it so far! It's a powerful language that can do so many things, and I'm excited to see what I'll be able to create once I become more proficient. If anyone has any tips or resources to share, I'm all ears!",
        postAuthor: "Christian",
      },
      {
        postText:
          "Today, I finally got around to organizing my closet and it feels amazing! It's such a small thing, but having a clean and tidy space really does wonders for my mental clarity and productivity. Now, onto the rest of the apartment...",
        postAuthor: "Christian",
      },
    ],
  },
];

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

  const filteredPosts = friendOptions
    .flatMap((friend) => friend.posts)
    .filter((post) => post.postAuthor === selectedAuthor);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row-reverse" }}>
      <div style={{ flex: "1", marginLeft: "5em" }}>
        <h1>Search Posts:</h1>
        <Dropdown
          placeholder="Select Author"
          selection
          options={friendOptions}
          onChange={(_, { value }) => setSelectedAuthor(value)}
        />
        {selectedAuthor && (
          <div>
            <h2>Posts by {selectedAuthor}:</h2>
            <p>Total likes: {numLikes}</p>
            <Card.Group>
              {filteredPosts.map((post) => (
                <Card key={post.postText}>
                  <Card.Content>
                    <Card.Header>{post.postAuthor}</Card.Header>
                    <Card.Description>{post.postText}</Card.Description>
                  </Card.Content>
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
                </Card>
              ))}
            </Card.Group>
          </div>
        )}
      </div>
      <Slider {...settings} style={{ flex: "1" }}>
        {friendOptions.map((friend) =>
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
