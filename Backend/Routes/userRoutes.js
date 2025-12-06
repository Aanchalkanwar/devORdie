const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile, updateProfile } = require('../controller/userController');

router.get('/profile/:userId', authMiddleware, getProfile);
router.put('/profile/:userId', authMiddleware, updateProfile);

module.exports = router;