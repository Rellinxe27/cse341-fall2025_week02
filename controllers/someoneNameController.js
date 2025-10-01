const getName = async (req, res) => {
    try {
        res.send('Skyla Allianna Boni');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getName
};