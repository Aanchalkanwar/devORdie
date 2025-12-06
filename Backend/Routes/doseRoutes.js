// routes/doseRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Import controller functions
const {
    logDose,
    getDoseStats
} = require('../controller/doseController');

// Protect all routes in this file
router.use(authMiddleware);

// Define routes
router.post('/log', logDose);
router.get('/stats', getDoseStats);

module.exports = router;