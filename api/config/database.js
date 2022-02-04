const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("DB Connection Failed.");
      console.log(err);
      process.exit(1);
    });
};
