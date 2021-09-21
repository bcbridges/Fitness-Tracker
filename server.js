// For express routing, detailed dev feedback, and mongoose functionality
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// Require in the models

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness_tracker_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
