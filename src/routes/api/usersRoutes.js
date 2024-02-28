const express = require('express');
const usersController = require('../../controllers/api/usersController');

const router = express.Router(); 

router.get('/', usersController.list);

module.exports = router; 