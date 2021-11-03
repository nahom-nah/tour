const factory = require("./handlerFactory");
const ComInfo = require("./../models/comInfoModel.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllComInfos = factory.getAll(ComInfo);
exports.getComInfos = factory.getOne(ComInfo);
exports.createComInfos = factory.createOne(ComInfo);
exports.updateComInfos = factory.updateOne(ComInfo);
exports.deleteComInfos = factory.deleteOne(ComInfo);
