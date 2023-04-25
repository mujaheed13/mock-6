const { FlightModel } = require("../models/flight.model");

const getFlights = async (req, res) => {
  try {
    const flights = await FlightModel.find();
    res.status(200).send(flights);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getFlightById = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await FlightModel.findById(id);
    res.status(200).send(flight);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const postFlight = async (req, res) => {
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  try {
    if (
      !airline ||
      !flightNo ||
      !departure ||
      !arrival ||
      !departureTime ||
      !arrivalTime ||
      !seats ||
      !price
    ) {
      res.status(400).send("All fields are required");
    } else {
      const flight = new FlightModel({
        airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price,
      });
      await flight.save();
      res.status(201).send("Flight added");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteFlight = async (req, res) => {
  const { id } = req.params;
  try {
    await FlightModel.findByIdAndDelete(id);
    res.status(202).send("Flight Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updateFlight = async (req, res) => {
  const { id } = req.params;
  try {
    await FlightModel.findByIdAndUpdate(id, req.body);
    res.status(204).send("Flight Updated");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getFlights,
  postFlight,
  getFlightById,
  deleteFlight,
  updateFlight,
};
