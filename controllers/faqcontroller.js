const factory = require("./handlerFactory");
const FAQ = require("./../models/FAQ.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllFAQs = factory.getAll(FAQ);
exports.getFAQs = factory.getOne(FAQ);
exports.createFAQs = factory.createOne(FAQ);
exports.updateFAQs = factory.updateOne(FAQ);
exports.deleteFAQs = factory.deleteOne(FAQ);
