const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
  }

  type Query {
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
