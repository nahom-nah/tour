const factory = require("./handlerFactory");
const Contact = require("./../models/contact.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllContacts = factory.getAll(Contact);
exports.getContacts = factory.getOne(Contact);
exports.createContacts = factory.createOne(Contact);
exports.updateContacts = factory.updateOne(Contact);
exports.deleteContacts = factory.deleteOne(Contact);
