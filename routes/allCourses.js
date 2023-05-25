const express = require('express');
const courses = require('../controllers/getAllCourses');
const router = express.Router();
router.get('/allCourses',courses)
module.exports = router;