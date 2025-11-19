const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Angular app build directory
app.use(express.static(path.join(__dirname, 'dist/App/browser')));

// Handle Angular routing, return all requests to Angular index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/App/browser/index.html'));
});

// Start the app by listening on the default Railway port
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});