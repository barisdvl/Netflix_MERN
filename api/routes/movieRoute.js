const router = require("express").Router();

const movieController = require("../controllers/movieController");
const verify = require("../middlewares/verifyToken");

router.route("/").post(verify, movieController.createMovie);
router.route("/:id").put(verify, movieController.updateMovie);
router.route("/find/:id").get(verify, movieController.getMovie);
router.route("/").get(verify, movieController.getAllMovies);
router.route("/:id").delete(verify, movieController.deleteMovie);
router.route("/random").get(verify, movieController.getRandom);

module.exports = router;
