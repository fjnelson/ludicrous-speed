const { Post, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    posts: async () => {
      return Post.find().sort({ createdAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  
    users: async () => {
      return User.find().sort({ createdAt: -1 });
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      // First we create the user
      const user = await User.create(args);
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addPost: async (parent, { postText, postAuthor }) => {
      const post = new Post({ postText, postAuthor, createdAt: new Date().toISOString() });
      await post.save();
      return post;
    },
    removePost: async (parent, { postId }) => {
      const post = await Post.findByIdAndRemove(postId);
      return post;
    },
    addComment: async (parent, { postId, commentText, username }) => {
      const comment = { commentText, username, createdAt: new Date().toISOString() };
      const post = await Post.findByIdAndUpdate(
        postId,
        { $push: { comments: comment } },
        { new: true }
      );
      return post;
    },
    removeComment: async (parent, { postId, commentId }) => {
      const post = await Post.findByIdAndUpdate(
        postId,
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
      return post;
    },

  },
  Post: {
    comments: (parent) => parent.comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  },
};

module.exports = resolvers;
