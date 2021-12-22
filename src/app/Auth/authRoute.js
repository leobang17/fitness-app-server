const express = require('express');

const authController = require('./authController');

const router = express.Router();

router.post('/enroll', authController.enroll);
router.post('/login');
router.get('/logout');
router.get('/kakao');

router.get('/test', authController.test);


module.exports = router;