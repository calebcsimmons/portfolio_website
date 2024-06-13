const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
    const projectId = req.body.id;
    const dataFilePath = path.join(__dirname, '../../client/data/project.json');

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send('Error reading file');
        }

        try {
            const projects = JSON.parse(data);
            const project = projects.find(proj => proj.id === projectId);

            if (!project) {
                return res.status(404).send('Project not found');
            }

            project.views += 1;

            fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    return res.status(500).send('Error writing file');
                }

                res.json({ views: project.views });
            });
        } catch (err) {
            console.error("Error parsing JSON:", err);
            res.status(500).send('Error parsing JSON');
        }
    });
});

module.exports = router;
