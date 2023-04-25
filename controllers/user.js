const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model.js");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      res.status(400).send("All Fields are required");
    } else {
      bcrypt.hash(password, 3, async (err, hashed_pass) => {
        const user = new UserModel({ name, email, password: hashed_pass });
        await user.save();
        res.status(201).send("User Registered");
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(201).send({ msg: "Login Successful", id: user._id });
        } else {
          res.status(401).send("Wrong Credentials");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { register, login };
