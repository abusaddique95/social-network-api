require("dotenv").config();

const databaseConnection = require("./config/connection.js");

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await databaseConnection;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`ERROR FAILED TO RUN SERVER ${error.message}`);
  }
};

init();
