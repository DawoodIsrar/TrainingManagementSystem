const express = require('express');
const profile = require('../controllers/profile')
const router = express.Router();
router.post('/getUserInfo',profile)
module.exports = router;