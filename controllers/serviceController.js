const factory = require("./handlerFactory");
const Sevice = require("./../models/services.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllSevices = factory.getAll(Sevice);
exports.getSevices = factory.getOne(Sevice);
exports.createSevices = factory.createOne(Sevice);
exports.updateSevices = factory.updateOne(Sevice);
exports.deleteSevices = factory.deleteOne(Sevice);
