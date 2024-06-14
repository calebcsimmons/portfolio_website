const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve project.json from the server/data directory
app.use('/data', express.static(path.join(__dirname, 'data')));


// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html')); // Serve client's index.html
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
