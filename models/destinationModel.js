const mongoose = require("mongoose");

const destinatinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "destination name is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    country: {
      type: String,
      required: [true, "country is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    mapLink: {
      type: String,
      required: [true, "map embade link is required"],
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

destinatinSchema.virtual("tours", {
  ref: "Tour",
  foreignField: "destination",
  localField: "_id",
});
const Destination = mongoose.model("Destination", destinatinSchema);

module.exports = Destination;
