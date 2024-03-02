const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json({ message: 'users list' });
});

app.get('/users/:id', (req, res) => {
  res.json({ message: ' user by id', id: req.params.id });
});

app.post('/users/create', (req, res) => {
  res.json({ message: ' user create' });
});

app.listen(3001, () => {
  console.log('faker api  running');
});
