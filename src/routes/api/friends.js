const { Router } = require("express");

const { createFriend, deleteFriend } = require("../../controllers/friends");

const router = Router();

router.post("/", createFriend);
router.delete("/:id", deleteFriend);

module.exports = router;
