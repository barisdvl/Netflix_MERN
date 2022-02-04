const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.userCreate = async (req, res) => {
  try {
    //get inputs of new user
    const { username, email, password } = req.body;

    //validate inputs of new user
    if (!(username && email && password)) {
      return res.status(400).json("All input is required.");
    }

    //check if user already exist
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.status(400).json("User already exist. Please Login");
    }

    //create user in database
    const user = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      ).toString(),
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
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (!(req.body.password === originalPassword)) {
      return res.status(401).json("Worng username or password");
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.TOKEN_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...userInfo } = user._doc;
    res.status(200).json({ ...userInfo, accessToken });
  } catch (error) {
    res.status(400).json(error);
  }
};
