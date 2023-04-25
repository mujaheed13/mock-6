const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  flight: {
    type: String,
    required: true,
  },
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = { BookingModel };
