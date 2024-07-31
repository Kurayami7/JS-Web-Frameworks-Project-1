# Football Data API Project

## Overview

This project is a web application that demonstrates the use of Express.js to serve football player data. The data includes various football players and their statistics, fetched from a JSON file. The frontend allows users to view and filter player information through an interactive web page.

## Features

- Serve football player data using Express.js.
- Fetch and display player data through API endpoints.
- Filter players by team and position.
- Interactive frontend with a button to fetch and display player statistics.

## Project Structure

- football-data-project/
- ├── data/
- │ └── footballData.json
- ├── public/
- │ ├── index.html
- │ ├── about.html
- │ ├── contact.html
- │ ├── data.html
- │ ├── script.js
- │ └── style.css
- ├── app.js
- ├── package.json
- └── README.md


## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd football-data-project
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Project

1. **Start the server:**

    ```bash
    npm start
    ```

    This will start the Express server on `http://localhost:3000` (or another port if specified).

2. **Access the application:**

    Open your web browser and go to `http://localhost:3000` to view the application. Use the "Load Player Stats" button on the Data page to fetch and display player data.

## API Endpoints

- **GET `/api/players`**: Returns a list of all football players.
- **GET `/api/players/team/:team`**: Filters players by team name (case-insensitive).
- **GET `/api/players/position/:position`**: Filters players by position (case-insensitive).

## Usage

- Navigate to the Data page to view and interact with the football player data.
- Click the "Load Player Stats" button to fetch and display player information.
