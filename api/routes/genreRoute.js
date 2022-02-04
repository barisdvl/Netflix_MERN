const router = require("express").Router();

const genreController = require("../controllers/genreController");
const verify = require("../verifyToken");

router.route("/").post(verify, genreController.createGenre);
router.route("/:id").put(verify, genreController.updateGenre);
router.route("/:id").delete(verify, genreController.deleteGenre);
router.route("/").get(verify, genreController.getAllGenres);

module.exports = router;
