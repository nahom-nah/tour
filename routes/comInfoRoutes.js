const express = require("express");
const comInfoController = require("./../controllers/comInfoController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(comInfoController.getAllComInfos)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    comInfoController.createComInfos
  );
router
  .route("/:id")
  .get(comInfoController.getComInfos)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    comInfoController.updateComInfos
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    comInfoController.deleteComInfos
  );

module.exports = router;
