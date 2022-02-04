const Movie = require("../models/Movie");

//CREATE
exports.createMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.create(req.body);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//UPDATE
exports.updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//DELETE
exports.deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  }else {
    res.status(403).json("You are not allowed!");
  }
};

//GET A MOVİE
exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL MOVİES
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort("-createdAt");
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error);
  }
};