const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");


const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    commentText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const likeSchema = new Schema(
  {
    likeId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    like: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    postAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [commentSchema],
    likes: [likeSchema],
  },
  {
    toJson: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Post = model("Posts", postSchema);

module.exports = Post;
