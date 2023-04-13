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
