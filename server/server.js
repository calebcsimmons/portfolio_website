// server/server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Endpoint to update views
app.post('/update-views', (req, res) => {
    const projectId = req.body.id;
    const dataFilePath = path.join(__dirname, '../client/projects.json');

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading file');
        }

        const projects = JSON.parse(data);
        const project = projects.find(proj => proj.id === projectId);

        if (project) {
            project.views += 1;

            fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error writing file');
                }

                res.json({ views: project.views });
            });
        } else {
            res.status(404).send('Project not found');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
