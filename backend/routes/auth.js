const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Hardcoded credentials
const HARDCODED_USERNAME = 'Kyra';
const HARDCODED_PASSWORD = 'Kyra';

// Login endpoint
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return res.json({ token });
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;


