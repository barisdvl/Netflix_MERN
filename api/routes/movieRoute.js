const router = require("express").Router();

const movieController = require("../controllers/movieController");
const verify = require("../verifyToken");

router.route("/").post(verify, movieController.createMovie);
router.route("/:id").put(verify, movieController.updateMovie);
router.route("/find/:id").get(verify, movieController.getMovie);
router.route("/").get(verify, movieController.getAllMovies);

module.exports = router;
