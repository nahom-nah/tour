const express = require("express");
const bookController = require("./../controllers/bookController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    bookController.createBooks
  );
router
  .route("/:id")
  .get(bookController.getBooks)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    bookController.updateBooks
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    bookController.deleteBooks
  );

module.exports = router;
