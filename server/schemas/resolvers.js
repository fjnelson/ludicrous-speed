const { Post } = require('../models');
const { User } = require('../models');
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
    addPost: async (parent, { postText, postAuthor }) => {
      return Post.create({ postText, postAuthor });
    },
    addComment: async (parent, { postId, commentText }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
