const factory = require("./handlerFactory");
const Comment = require("./../models/commentModel.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllComments = factory.getAll(Comment);
exports.getComments = factory.getOne(Comment);
exports.createComments = factory.createOne(Comment);
exports.updateComments = factory.updateOne(Comment);
exports.deleteComments = factory.deleteOne(Comment);
