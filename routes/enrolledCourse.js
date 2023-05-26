const express = require("express");
const enrolledCourse = require("../controllers/enrol");
const getEnrolledCourse = require("../controllers/getAllEnrolled");
const router = express.Router();
router.post("/enrolledCourse", enrolledCourse);
router.post("/getEnrolledCourses", getEnrolledCourse);

module.exports = router;
