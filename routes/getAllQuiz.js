const express = require('express');
const quiz = require('../controllers/getAllQuizes');
const router = express.Router();
router.post('/allQuiz',quiz)
module.exports = router;