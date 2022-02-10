const router = require("express").Router();

const verify = require("../verifyToken");
const listController = require("../controllers/listController");

router.route("/").post(verify, listController.createList);
router.route("/").get(verify, listController.getList);
router.route("/:id").delete(verify, listController.deleteList);

module.exports = router;
