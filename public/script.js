// Add an event listener to the "Fetch Data" button
document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        // Send a request to the server to get the JSON data
        const response = await fetch('/api/data');
        // Parse the response as JSON
        const data = await response.json();

        // Initialize an HTML string to build the output
        let output = '<ul>';
        // Iterate over each car object in the data array
        data.forEach(car => {
            // Append each car's information as a list item
            output += `<li>${car.make} ${car.model} (${car.year}) - $${car.price}: ${car.description}</li>`;
        });
        // Close the unordered list
        output += '</ul>';
        // Insert the constructed HTML into the dataDisplay element
        document.getElementById('dataDisplay').innerHTML = output;
    } catch (error) {
        // Log the error to the console and display an error message to the user
        console.error('Error fetching data:', error);
        document.getElementById('dataDisplay').innerText = 'Error fetching data.';
    }
});
