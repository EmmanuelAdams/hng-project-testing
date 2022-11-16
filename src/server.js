const express = require('express');
const app = express();

// Middlewares...
// Routes...
app.get('/user', async (_, res) => {
  res.json({ message: 'pass!' });
});

module.exports = app;
