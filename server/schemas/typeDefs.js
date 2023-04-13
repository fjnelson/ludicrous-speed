const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID
    postText: String!
    postAuthor: String!
    createdAt: String!
    comments: [Comment]!
  }
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts:[Post]
  }

  type Comment {
    _id: ID
    commentText: String!
    username: String!
    createdAt: String!
  }

  type Query {
    posts: [Post]
    post(postId: ID!): Post
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!, username: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
