const express = require("express");
const quizesByCourseId = require("../controllers/getQuiz");
const router = express.Router();
router.post("/quizesByCourseId", quizesByCourseId);

module.exports = router;
