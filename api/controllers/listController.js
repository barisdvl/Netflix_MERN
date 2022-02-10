const List = require("../models/List");
const Genre = require("../models/Genre")

//CREATE
exports.createList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await List.create(req.body);
      res.status(201).json(list);
    } catch (error) {
      if (error.code === 11000) {
        res.status(500).json("List title already exist");
      } else {
        res.status(500).json(error);
      }
    }
  } else {
    res.status(500).json("You are not allowed!");
  }
};

//DELETE
exports.deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("The list has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

//GET LIST
exports.getList = async (req, res) => {
  let list = [];
  try {
    list = await List.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};
