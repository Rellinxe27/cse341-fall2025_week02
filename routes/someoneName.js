// routes/someoneName.js
const express = require('express');
const router = express.Router();
const nameController = require('../controllers/someoneNameController');

// Routes using controller methods
router.get('/', nameController.getName);

module.exports = router;