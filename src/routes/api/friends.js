const { Router } = require("express");
const router = Router();
const {
  createFriendFromUser,
  removeFriendFromUser,
} = require("../../controllers/friends");

router.post("/friends", createFriendFromUser);

router.delete("/friends/:friendId", removeFriendFromUser);

module.exports = router;
