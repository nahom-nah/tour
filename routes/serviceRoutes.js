const express = require("express");
const servicesController = require("./../controllers/serviceController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(servicesController.getAllSevices)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    servicesController.createSevices
  );
router
  .route("/:id")
  .get(servicesController.getSevices)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    servicesController.updateSevices
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    servicesController.deleteSevices
  );

module.exports = router;
