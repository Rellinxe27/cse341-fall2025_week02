// server.js
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/', require('./routes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});











/*
const express = require('express');
const connectDB = require('./db/config');

const app = express();

// Connect to Database
connectDB()
    .then(() => {
        app.use(express.json());

        // Routes
app.use('/', require('./routes'));

        // Error handling middleware
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ message: 'Something went wrong!' });
        });

        // 404 handler
        app.use((req, res) => {
            res.status(404).json({ message: 'Route not found' });
        });

        // port
        const PORT = process.env.PORT || 3000;
        // Start server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to start server:', error);
        process.exit(1);
    });
*/