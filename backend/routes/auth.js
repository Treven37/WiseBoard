const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/verify', authController.verify);
router.get('/User/deleteAll', authController.deleteAllUser);

module.exports = router; 