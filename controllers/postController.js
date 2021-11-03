const factory = require("./handlerFactory");
const Post = require("./../models/posts.js");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllPosts = factory.getAll(Post);
exports.getPosts = factory.getOne(Post);
exports.createPosts = factory.createOne(Post);
exports.updatePosts = factory.updateOne(Post);
exports.deletePosts = factory.deleteOne(Post);
