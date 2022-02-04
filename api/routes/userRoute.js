const express = require("express");

const userController = require("../controllers/userController");
const verify = require("../verifyToken");

const router = express.Router();

router.route("/:id").put(verify, userController.userUpdate);
router.route("/:id").delete(verify, userController.userDelete);
router.route("/find/:id").get(verify, userController.getUser);
router.route("/").get(verify, userController.getAllUsers);

module.exports = router;
