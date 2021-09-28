// requre mongoose to be able to create json schema
const mongoose = require("mongoose");

// bring in mongoose's schema class to create a new workout schema.
const Schema = mongoose.Schema;

// Need to create a new schema that can track the following:
// date of workout, exercises associated with each workout (maybe create an array for each workout?), exerciseName,
// duration (for cardio), distance (for cardio),weight per rep, repetitions, sets per exercise

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        // Validation to require that this be filled in
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
        // Check front end to see if I need any time validation for this.
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

// Associate schema with variable to export and link to index.js
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
