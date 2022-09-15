const { Router } = require("express");

const reactions = require("./reaction.js");

const {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createNewThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

router.use("/reactions", reactions);

module.exports = router;
