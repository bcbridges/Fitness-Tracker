const router = require("express").Router();
// Erroring out, fix ASAP
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// If user navigates to home
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public/" });
});

// When user clicks on the 'New Workout' btn
router.get("/exercise", (req, res) => {
  res.sendFile("exercise.html", { root: "./public/" });
});

// If user clicks on the 'Dashboard' btn
router.get("/stats", (req, res) => {
  res.sendFile("stats.html", { root: "./public/" });
});

module.exports = router;
