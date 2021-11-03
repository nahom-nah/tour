const mongoose = require("mongoose");

const serviceShema = mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
});

const Service = mongoose.model("Service", serviceShema);

module.exports = Service;
