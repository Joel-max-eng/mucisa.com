const express = require('express');
const router = express.Router();
const { registerMember } = require('../controllers/memberController');

router.post('/register', registerMember);

module.exports = router;

// This code defines a route for registering members in an Express application.