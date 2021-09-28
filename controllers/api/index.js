const router = require("express").Router();
// Bring in mongoose to interact with schmea -- Not sure if needed
const mongoose = require("mongoose");
const db = require("../../models");

// getLastWorkout
// GET all workouts - The api.js will get the last specific one
// Can't test until the PUT and POST is Gucci :(
router.get("/workouts", async (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: { $sum: "$exercices.duration" },
      },
    },
  ])
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// addExercise
// PUT new exercise to a workout
router.put("/workouts/:id", async (req, res) => {
  await db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
    },
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

// createWorkout
// POST new workout
router.post("/workouts", async (req, res) => {
  const response = await db.Workout.create({});
  res.json(response);
});

// getWorkoutsInRange
// GET all workouts within a range
router.get("/workouts/range", async (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .limit(7)
    .sort({ day: 1 })
    .then((result) => res.json(result));
});

module.exports = router;
