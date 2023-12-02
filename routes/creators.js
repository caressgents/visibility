const express = require('express');
const router = express.Router();

// Example route: Get all creators
router.get('/', (req, res) => {
  res.json({ message: "List of creators will be here" });
});

module.exports = router;
