// import and create express app
const express = require('express');
const connectDB = require('./db/config');

const app = express();

// Connect to Database
connectDB();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello Rellinxe Boni!');
});

// port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
});
