// routes/someoneName.js
const express = require('express');
const router = express.Router();
const { someoneNameController } = require('../controllers');

// Routes using controller methods
router.get('/', someoneNameController.getName);

module.exports = router;