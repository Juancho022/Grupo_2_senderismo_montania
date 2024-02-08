const express = require('express');
const router = express.Router();

const helpController = require('../controllers/helpController');

router.get('/', helpController.ayuda);

module.exports = router;