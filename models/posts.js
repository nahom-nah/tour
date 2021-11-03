const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true],
  },
  body: {
    type: String,
    required: [true],
  },
  type: {
    type: String,
    enum: ["blog", "news"],
    required: [true],
  },
  author_name: {
    type: String,
    required: [true],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
