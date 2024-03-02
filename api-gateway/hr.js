const express = require('express');
const app = express();
require('./config/db');

app.use(express.json());

app.get('/hr-users', (req, res) => {
  res.json({ message: '/hr-users' });
});
app.get('/result', (req, res) => {
  res.json({ message: '/hr-insert/result' });
});

app.get('/get-all', (req, res) => {
  res.json({ message: '/hr-insert/get' });
});
app.listen(3001, () => {
  console.log('server on port 3001');
});
