const express = require('express');
const router = express.Router();
const reports = require('../controllers/getReports');
router.post("/reportsById",reports); 
module.exports = router;  