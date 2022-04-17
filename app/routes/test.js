const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.test.test);

module.exports = router;
