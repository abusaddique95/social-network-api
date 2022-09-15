require("dotenv").config();
const mongoose = require("mongoose");
const { seedUsers, seedThoughts } = require("./util");

const init = async () => {
  try {
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(MONGODB_URI, options);
    console.log("[INFO]: Successfully connected to DB");

    // seed users
    await seedUsers(50);

    // seed thoughts
    await seedThoughts(30);
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

// get one user

init();
