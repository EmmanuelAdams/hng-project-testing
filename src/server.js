const express = require('express');
const app = express();

app.get('/loginRoute', async (_, res) => {
  res.json({ message: 'login successful' });
});

app.get('/logoutRoute', async (_, res) => {
  res.json({ message: 'success' });
});

app.get('/userProfileRoute', async (_, res) => {
  res.json({
    message: 'you have successfully deleted your account',
  });
});

app.get('/userRoute', async (_, res) => {
  res.status(200).json('success');
});

module.exports = app;
