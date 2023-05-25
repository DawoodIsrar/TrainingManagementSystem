const express = require('express');
const quiz = require('../controllers/getAllQuizes');
const router = express.Router();
router.get('/allQuiz/:courseId',quiz)
module.exports = router;