const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  createANewUser,
  deleteUserById,
  updateUser,
} = require("../../controllers/users");

const friends = require("./friends.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createANewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

router.use("/:id", friends);

module.exports = router;
