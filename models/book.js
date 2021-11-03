const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  customer_name: {
    type: String,
    required: [true, "customer name is required"],
  },
  customer_email: {
    type: String,
    required: [true, "customer email is required"],
  },
  customer_phoneNo: {
    type: String,
    required: [true, "customer phone no is required"],
  },
  address: {
    type: String,
  },
  payment_status: {
    type: String,
    enum: ["fully paid", "partial paid"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
