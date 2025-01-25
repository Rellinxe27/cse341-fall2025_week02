// routes/index.js
const express = require('express');
const router = express.Router();

// Import route modules
const someoneNameRoutes = require('./someoneName');

// Use routes
router.use('/name', someoneNameRoutes); // This will prefix all name routes with /name

// Base route test (if you want to keep it)
router.get('/', async (req, res) => {
    try {
        res.send('Skyla Alliana');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
/*
// GET
router.get('/:id', async (req, res) => {
    try {
        res.send(`Get contact ${req.params.id}`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new contact
router.post('/', async (req, res) => {
    try {
        res.status(201).send('Create new contact');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update contact
router.put('/:id', async (req, res) => {
    try {
        res.send(`Update contact ${req.params.id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE contact
router.delete('/:id', async (req, res) => {
    try {
        res.send(`Delete contact ${req.params.id}`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
*/

module.exports = router;