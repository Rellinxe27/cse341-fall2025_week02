const express = require('express');
const app = express();

app.use(express.json());

// Root route - returns a name
app.get('/', (req, res) => {
    res.send('Sarah Birch');
});

// Name routes
app.use('/name', require('./routes/someoneName'));

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