const { Router } = require("express");
const router = Router();
const {
  createReactionForThought,
  removeReactionFromThought,
} = require("../../controllers/reaction");

//POST /reactions
router.post("/reactions", createReactionForThought);

//DEL /reactions/:id
router.delete("/reactions/:id", removeReactionFromThought);

module.exports = router;
