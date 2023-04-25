const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/mongoose.connection.js");
const { userRouter } = require("./routes/user.route.js");
const { flightRouter } = require("./routes/flight.route.js");
const { bookingRouter } = require("./routes/booking.route.js");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3030;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", userRouter);
app.use("/api/flights", flightRouter);
app.use("/api", bookingRouter);

app.get("/", (req, res) => {
  res.send("Air Ticket Booking");
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error while connecting to Database", error);
  }
});
