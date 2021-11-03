const express = require("express");
const destinationController = require("./../controllers/destinationController");
const authController = require("./../controllers/authController");

const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").get(destinationController.getAllTDestinations).post(
  authController.protect,
  authController.restrictTo("admin"),
  upload.any("imageCover"),

  destinationController.resizeTourImages,
  destinationController.createDestinations
);
router
  .route("/:id")
  .get(destinationController.getDestinations)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),

    destinationController.resizeTourImages,
    destinationController.updateDestinations
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    destinationController.deleteDestinations
  );

module.exports = router;
