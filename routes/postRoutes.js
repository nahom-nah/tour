const express = require("express");
const postController = require("./../controllers/postController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    postController.createPosts
  );
router
  .route("/:id")
  .get(postController.getPosts)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    postController.updatePosts
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    postController.deletePosts
  );

module.exports = router;
