// routes/index.js
const express = require('expres');
const router = express.Router();

// Import route modules
const someoneNameRoutes = require('./someoneName');

// Use routes
router.use('/name', someoneNameRoutes); // This will prefix all name routes with /name

// Base route test
router.get('/', async (req, res) => {
    try {
        res.send('Skyla Alliana');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;