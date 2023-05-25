const express = require('express');
const addQustion = require('../controllers/questionController');
const router = express.Router();
router.post('/addQuestion',addQustion)
module.exports = router;