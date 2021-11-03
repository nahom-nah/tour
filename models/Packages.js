const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "package must have a title"],
  },
  price: {
    type: Number,
    required: [true, "package must have price"],
  },
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: "Tour",
    required: [true],
  },
  description: {
    type: String,
  },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
