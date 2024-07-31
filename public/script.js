// Adding an event listener to the "Load Player Stats" button
document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        // Sending a request to the server to fetch player data
        const response = await fetch('/api/players'); // Ensure this matches your Express route
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Throwing an error if the response is not OK
        }
        const data = await response.json(); // Parsing the response JSON data

        // Initializing an HTML string to build the output
        let output = '<ul>';
        // Iterating over each player in the data array
        data.forEach(player => {
            // Appending each player's information as a list item
            output += `<li>${player.player.name} (${player.team.name}) - ${player.player.position} - Goals: ${player.player.statistics.goals}</li>`;
        });
        output += '</ul>'; // Closing the unordered list
        // Inserting the constructed HTML into the dataDisplay element
        document.getElementById('dataDisplay').innerHTML = output;
    } catch (error) {
        // Logging the error to the console and displaying an error message to the user
        console.error('Error fetching data:', error);
        document.getElementById('dataDisplay').innerText = 'Error fetching data.'; // Displaying error message
    }
});
