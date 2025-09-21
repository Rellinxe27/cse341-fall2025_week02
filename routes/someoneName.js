// routes/someoneName.js
const express = require('expres');
const router = express.Router();
const nameController = require('../controllers/someoneNameController');

// Routes using controller methods
router.get('/', nameController.getName);

module.exports = router;