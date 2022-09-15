const connection = require("../../src/config/connection");
const User = require("../..//src/models/User");
const server = require("../../src/index");
const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  try {
    connection();
    const users = await User.find({});
    console.log(users);
    return res.json({ users });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    connection();
    const { id } = req.params;
    const user = await User.findById(id);
    console.log(user);
    return res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

const createANewUser = async (req, res) => {
  try {
    connection();
    console.log(req.body);

    const { userName, email, thoughts, friends } = req.body;

    const createANewUser = await User.create({
      userName,
      email,
      thoughts,
      friends,
    });
    console.log(createANewUser);
    return res.send({ createANewUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    connection();
    console.log(req.body);

    const { userName, email, thoughts, friends } = req.body;

    const updateUser = await User.findOneAndUpdate({
      userName,
      email,
      thoughts,
      friends,
    });
    console.log(updateUser);
    return res.send({ updateUser });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    connection();
    const { id } = req.params;

    const deleteAUser = await User.deleteOne({ id });
    console.log(deleteAUser);
    return res.send({ deleteAUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createANewUser,
  updateUser,
  deleteUserById,
};
