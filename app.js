// Importing necessary modules
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import footballData from './data/footballData.json' assert { type: 'json' }; // Importing football data from JSON file

// Initializing the Express application
const app = express();
const port = process.env.PORT || 3000; // Setting the port for the server

// Setting up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serving static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Defining a route to serve all football players data
app.get('/api/players', (req, res) => {
    res.json(footballData.players); // Sending football players data as a JSON response
});

// Defining a route to filter football players by team
app.get('/api/players/team/:team', (req, res) => {
    const team = req.params.team.toLowerCase();
    const filteredData = footballData.players.filter(entry => entry.team.name.toLowerCase() === team);
    res.json(filteredData); // Sending filtered football players data based on team
});

// Defining a route to filter football players by position
app.get('/api/players/position/:position', (req, res) => {
    const position = req.params.position.toLowerCase();
    const filteredData = footballData.players.filter(entry => entry.player.position.toLowerCase() === position);
    res.json(filteredData); // Sending filtered football players data based on position
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Logging the server URL
});
