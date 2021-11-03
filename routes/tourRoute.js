const express = require("express");
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.createTours
  );
router
  .route("/:id")
  .get(tourController.getTours)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTours
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.deleteTours
  );

module.exports = router;
