
// Create web server
const express = require('express');
const app = express();

// Add middleware to parse the request body
app.use(express.json());

// Array of comments
const comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to create a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});