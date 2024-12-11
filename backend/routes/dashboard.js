const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    summary: "Recent innovations in Generative AI include advancements like ChatGPT, DALL-E, and real-time AI-generated music.",
    reference: "https://example.com/ai-news",
    technicalDetails: "This project uses Angular, Node.js, MongoDB, and JWT for user authentication.",
  });
});

module.exports = router;
