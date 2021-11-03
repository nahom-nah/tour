const factory = require("./handlerFactory");
const Destination = require("./../models/destinationModel.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

exports.resizeTourImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;

  console.log(req.body, "one one");

  next();
});

exports.getAllTDestinations = factory.getAll(Destination);
exports.getDestinations = factory.getOne(Destination);
exports.createDestinations = factory.createOne(Destination);
exports.updateDestinations = factory.updateOne(Destination);
exports.deleteDestinations = factory.deleteOne(Destination);
