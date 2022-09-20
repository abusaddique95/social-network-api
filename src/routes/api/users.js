const { Router } = require("express");
const router = Router();
const friends = require("./friends.js");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users");

//GET /
router.get("/", getAllUsers);

//GET /:id
router.get("/:id", getUserById);

//POST /
router.post("/", createUser);

//PUT /:id
router.put("/:id", updateUser);

//DEL /:id
router.delete("/:id", deleteUser);

//USE /:userID
router.use("/:userId", friends);

module.exports = router;
