const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.post('/register', authController.registerNewUser);

router.post('/login', authController.loginUser);

module.exports = router;
