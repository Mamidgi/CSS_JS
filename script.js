// Data to be populated
const data = [
    {name: "sravani", email: "sravanimamidgi@gmail.com"},
    {name: "sanjana", email: "sanjanamamidgi@gmail.com"},
    {name: "sathwik", email: "sathwikmamidgi@gmail.com"}
];

// Function to populate the table
function populateTable() {
    const table = document.getElementById("dataTable");
    data.forEach(item => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.name;
        cell2.textContent = item.email;
    });
}

// Populate the table on page load
window.onload = populateTable;