const { Schema, model } = require("mongoose");

const userSchema = {
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    // unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

const options = {
  toJSON: {
    virtuals: true,
  },
  id: false,
};

const schema = new Schema(userSchema, options);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

module.exports = User;
