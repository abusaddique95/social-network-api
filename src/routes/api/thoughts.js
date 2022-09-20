const { Router } = require("express");
const router = Router();
const { Thought, User } = require("../../models");

const reactions = require("./reaction");

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

//GET /
router.get("/", getAllThoughts);

//GET /:id
router.get("/:id", getThoughtsById);

//POST /
router.post("/", createThought);

//PUT /:id
router.put("/:id", updateThought);

//DEL /:id
router.delete("/:id", deleteThought);

//USE /:userID
router.use("/:thoughtId", reactions);

module.exports = router;
