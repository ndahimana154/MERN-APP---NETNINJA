const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a Single Workout
router.get("/:id", getWorkout);

// POST a new Workout
router.post("/", createWorkout);

// DELETE a new Workout
router.delete("/:id", deleteWorkout);

// UPDATE a new Workout
router.patch("/:id", updateWorkout);

// Export the router
module.exports = router;
