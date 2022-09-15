const { Router } = require("express");

const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reaction");

const router = Router();

router.post("/:id", createReaction);
router.delete("/:id", deleteReaction);

module.exports = router;
