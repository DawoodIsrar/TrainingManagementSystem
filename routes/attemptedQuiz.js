const express = require('express');
const attemptedQuiz = require('../controllers/markSheet');
const router = express.Router();
router.post('/attemptedQuiz',attemptedQuiz)
module.exports = router;   