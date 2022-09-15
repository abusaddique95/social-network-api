const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = {
  userName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 25,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
};

const schema = new Schema(userSchema);

const User = mongoose.model("user", schema);

module.exports = User;
