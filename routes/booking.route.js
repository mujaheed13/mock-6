const express = require("express");
const { bookaFlight, getBookings } = require("../controllers/booking");
const bookingRouter = express.Router();

bookingRouter.post("/booking", bookaFlight);
bookingRouter.get("/dashboard", getBookings);


module.exports = { bookingRouter }