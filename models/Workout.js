// requre mongoose to be able to create json schema
const mongoose = require("mongoose");

// bring in mongoose's schema class to create a new workout schema.
const Schema = mongoose.Schema;

// Need to create a new schema that can track the following:
// date of workout, exercises associated with each workout (maybe create an array for each workout?), exerciseName,
// duration (for cardio), distance (for cardio),weight per rep, reps, sets per exercise
