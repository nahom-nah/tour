const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: [true],
  },
  message: {
    type: String,
    required: [true],
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
