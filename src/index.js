require("dotenv").config();

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
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/NOSQL-social-network-api",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("[INFO]: Database connection successful");

    app.listen(PORT, () =>
      console.log(` Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
