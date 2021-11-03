const factory = require("./handlerFactory");
const Book = require("./../models/book.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllBooks = factory.getAll(Book);
exports.getBooks = factory.getOne(Book);
exports.createBooks = factory.createOne(Book);
exports.updateBooks = factory.updateOne(Book);
exports.deleteBooks = factory.deleteOne(Book);
