const { Router } = require("express");

const {
  createReactionForThought,
  deleteReactionByThought,
} = require("../../controllers/reaction");

const router = Router({ mergeParams: true });

router.post("/", createReactionForThought);
router.delete("/:reactionId", deleteReactionByThought);

module.exports = router;
