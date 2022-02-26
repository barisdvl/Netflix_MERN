const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { createToken } = require("../middlewares/createToken");
const {
  decryptPassword,
  encryptPassword,
} = require("../middlewares/hashPassword");

const User = require("../models/User");

exports.userCreate = async (req, res) => {
  try {
    //get inputs of new user
    const { email, password } = req.body;

    //validate inputs of new user
    if (!(email && password)) {
      return res.status(400).json("All input is required.");
    }

    //check if user already exist
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.status(400).json("User already exist. Please Login");
    }

    //create user in database
    const user = await User.create({
      email: email.toLowerCase(),
      password: encryptPassword(password),
    });

    //return new user
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.userLogin = async (req, res) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).json("All input is required.");
    }
    const user = await User.findOne({ email: req.body.email });

    //decrypt password
    const originalPassword = decryptPassword(user.password);

    if (!(req.body.password === originalPassword)) {
      return res.status(401).json("Worng username or password");
    }

    const accessToken = createToken(user._id, user.isAdmin);
    const userInfo = { _id: user._id, isAdmin: user.isAdmin };
    //const { password, ...userInfo } = user._doc;    
    res.status(200).json({ userInfo, accessToken });
  } catch (error) {
    res.status(400).json(error);
  }
};
