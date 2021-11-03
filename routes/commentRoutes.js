const express = require("express");
const commentControllers = require("./../controllers/commentController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(commentControllers.getAllComments)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    commentControllers.createComments
  );
router
  .route("/:id")
  .get(commentControllers.getComments)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    commentControllers.updateComments
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    commentControllers.deleteComments
  );

module.exports = router;
