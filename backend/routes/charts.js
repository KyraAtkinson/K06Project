


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send('Token is required');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Unauthorized');
    req.user = decoded;
    next();
  });
}

// Summary Chart Data Endpoint
router.get('/summary', verifyToken, (req, res) => {
  const summaryChartData = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November'],
    data: [20, 25, 30, 35, 40, 45], // Example data for Generative AI adoption growth
  };
  res.json(summaryChartData);
});


// Reports Chart Data Endpoint
router.get('/reports', verifyToken, (req, res) => {
  const reportsChartData = {
    labels: ['ChatGPT', 'Google Bard', 'Microsoft Copilot', 'Adobe Firefly'],
    data: [60, 25, 10, 5],
  };
  res.json(reportsChartData);
});

module.exports = router;
