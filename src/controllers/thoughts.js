const connection = require("../../src/config/connection");
const Thought = require("../../src/models/Thought");
const server = require("../../src/index");
const mongoose = require("mongoose");

const getAllThoughts = async (req, res) => {
  try {
    connection();
    const thoughts = await Thought.find({});
    console.log(thoughts);
    return res.json({ thoughts });
  } catch (error) {
    console.log(error);
  }
};

const getThoughtById = async (req, res) => {
  try {
    connection();
    const { id } = req.params;
    const thought = await Thought.findById(id);
    console.log(thought);
    return res.json({ thought });
  } catch (error) {
    console.log(error);
  }
};

const createNewThought = async (req, res) => {
  try {
    connection();
    console.log(req.body);

    const { thoughtText, createdAt, userName, reactions } = req.body;

    const createANewThought = await Thought.create({
      thoughtText,
      createdAt,
      userName,
      reactions,
    });
    console.log(createANewThought);
    return res.send({ createANewThought });
  } catch (error) {
    console.log(error);
  }
};

const updateThought = async (req, res) => {
  try {
    connection();
    console.log(req.body);

    const { thoughtText, createdAt, userName, reactions } = req.body;

    const updateAThought = await Thought.findOneAndUpdate({
      thoughtText,
      createdAt,
      userName,
      reactions,
    });
    console.log(updateAThought);
    return res.send({ updateAThought });
  } catch (error) {
    console.log(error);
  }
};

const deleteThought = async (req, res) => {
  try {
    connection();
    const { id } = req.params;

    const deleteAThought = await Thought.deleteOne({ id });
    console.log(deleteAThought);
    return res.send({ deleteAThought });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThought,
  deleteThought,
};
