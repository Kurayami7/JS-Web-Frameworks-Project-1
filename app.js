// Import necessary modules
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import data from './data/data.json' assert { type: 'json' };

// Initialize the Express application
const app = express();
const port = 3000;

// Set up __dirname to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the JSON data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
