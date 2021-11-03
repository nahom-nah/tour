const factory = require("./handlerFactory");
const Package = require("./../models/Packages.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllPackages = factory.getAll(Package);
exports.getPackages = factory.getOne(Package);
exports.createPackages = factory.createOne(Package);
exports.updatePackages = factory.updateOne(Package);
exports.deletePackages = factory.deleteOne(Package);
