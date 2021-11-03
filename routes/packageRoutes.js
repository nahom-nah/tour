const express = require("express");
const packageController = require("./../controllers/packageController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(packageController.getAllPackages)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    packageController.createPackages
  );
router
  .route("/:id")
  .get(packageController.getPackages)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    packageController.updatePackages
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    packageController.deletePackages
  );

module.exports = router;
