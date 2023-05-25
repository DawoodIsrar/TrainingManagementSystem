const express = require('express');
const createCourse = require('../controllers/createCourses');
const router = express.Router();
router.post('/addCourse',createCourse)
module.exports = router;