const express = require("express");
const { addQuestion, viewQuestions } = require("../controllers/question");

const router = express.Router();
router.post("/addQuestion", addQuestion);
router.post("/viewQuestions", viewQuestions);

module.exports = router;
