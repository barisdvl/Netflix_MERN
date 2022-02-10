const Genre = require("../models/Genre");

//CREATE
exports.createGenre = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      //create genre
      const genre = await Genre.create(req.body);
      res.status(201).json(genre);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json("Genre already exist");
      } else {
        res.status(500).json(error);
      }
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//UPDATE
exports.updateGenre = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const genre = await Genre.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(genre);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//DELETE
exports.deleteGenre = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      res.status(200).json("The genre has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//GET ALL GENRES
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json(error);
  }
};
