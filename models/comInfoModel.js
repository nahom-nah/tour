const mongoose = require("mongoose");

const comInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  about_us: {
    type: String,
    required: [true],
  },
  mission: {
    type: String,
    required: [true],
  },
  vision: {
    type: String,
    required: [true],
  },
  why_us: {
    type: String,
    required: [true],
  },
  phone_no: {
    type: String,
    required: [true],
  },
  al_phone_no: {
    type: String,
  },
  address: String,
  mapLink: String,
  email: String,
  facebook: String,
  tiktok: String,
  telegram: String,
  youtube: String,
});

const ComInfo = mongoose.model("ComInfo", comInfoSchema);

module.exports = ComInfo;
