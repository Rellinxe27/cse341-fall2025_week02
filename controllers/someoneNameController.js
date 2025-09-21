const getName = async (req, res) => {
    try {
        res.send('Get someone name');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getName
};