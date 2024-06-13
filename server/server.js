// server/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const updateViewsRouter = require('./routes/updateViews');

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Import and use routes
const updateViewsRoute = require('./routes/updateViews');
app.use('/update-views', updateViewsRoute);

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
