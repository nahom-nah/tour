const express = require("express");
const FAQControllers = require("./../controllers/faqcontroller");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(FAQControllers.getAllFAQs)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    FAQControllers.createFAQs
  );
router
  .route("/:id")
  .get(FAQControllers.getFAQs)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    FAQControllers.updateFAQs
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    FAQControllers.deleteFAQs
  );

module.exports = router;
