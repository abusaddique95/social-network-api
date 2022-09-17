const { Router } = require("express");

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/thoughts");
const reactions = require("./reaction");

const router = Router();

router.get("/", getThoughts);
router.get("/:thoughtId", getThoughtById);
router.post("/", createThought);
router.put("/:thoughtId", updateThoughtById);
router.delete("/:thoughtId", deleteThoughtById);

router.use("/:thoughtId/reactions", reactions);

module.exports = router;
