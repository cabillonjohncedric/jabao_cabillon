const express = require('express');

function setupRoutes(app) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../views/index.html');
    });

    app.post('/submit', (req, res) => {
        const name = req.body.name;
        const message = req.body.message;
        res.send(`<h1>Submitted Data</h1><p>Name: ${name}</p><p>Message: ${message}</p>`);
    });
}

module.exports = setupRoutes;