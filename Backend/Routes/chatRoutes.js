// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { handleChatMessage } = require('../controller/chatController');

// Protect chat route with authentication
router.post('/', authMiddleware, handleChatMessage);

module.exports = router;