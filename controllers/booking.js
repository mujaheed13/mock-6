const { BookingModel } = require("../models/booking.model.js");

const getBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).send(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const bookaFlight = async (req, res) => {
  const { user, flight } = req.body;
  try {
    if (!user || !flight) {
      res.status(400).send("All fields are required");
    } else {
      const booking = new BookingModel({ user, flight });
      await booking.save();
      res.status(201).send("Flight Booked");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getBookings, bookaFlight };
