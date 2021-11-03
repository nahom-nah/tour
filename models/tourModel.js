const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "tour name is required"],
    },
    description: {
      type: String,
      required: [true, "tour must have a description"],
    },
    duration: {
      type: String,
      required: [true, "tour must have a duration"],
    },
    itinerary: String,
    info: String,
    intro_vid: String,
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
    },
    price_Range: {
      type: String,
      required: [true],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    destination: {
      type: mongoose.Schema.ObjectId,
      ref: "Destination",
      required: [true],
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

tourSchema.virtual("packages", {
  ref: "Package",
  foreignField: "tour",
  localField: "_id",
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
