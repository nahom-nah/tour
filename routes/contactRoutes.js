const express = require("express");
const contactController = require("./../controllers/contactController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(contactController.getAllContacts)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    contactController.createContacts
  );
router
  .route("/:id")
  .get(contactController.getContacts)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    contactController.updateContacts
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    contactController.deleteContacts
  );

module.exports = router;
