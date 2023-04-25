const express = require("express");
const {
  getFlights,
  postFlight,
  getFlightById,
  deleteFlight,
  updateFlight,
} = require("../controllers/flight.js");
const flightRouter = express.Router();

flightRouter.get("/", getFlights);
flightRouter.get("/:id", getFlightById);
flightRouter.post("/", postFlight);
flightRouter.delete("/:id", deleteFlight);
flightRouter.patch("/:id", updateFlight);

module.exports = { flightRouter };
