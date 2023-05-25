const express = require('express');
const createQuiz = require('../controllers/quizControler');
const router = express.Router();
router.post('/addQuiz',createQuiz)
module.exports = router;