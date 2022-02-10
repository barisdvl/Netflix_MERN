const express = require("express");
const dotenv = require("dotenv");

const database = require("./config/database");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const genreRoute = require("./routes/genreRoute");
const listRoute = require("./routes/listRoute");

dotenv.config();
database.connect();

const app = express();
const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;

//Middlewares
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute);
app.use("/api/lists", listRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
