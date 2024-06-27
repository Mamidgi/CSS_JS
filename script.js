const users = [
    { name: "Sravani", email: "sravanimamidgi@gmail.com" },
    { name: "Sanjana", email: "sanjanamamidgi@gmail.com" },
    { name: "Sathwik", email: "sathwikmamidgi@gmail.com" }
];

const populateTable = () => {
    const table = document.querySelector("#dataTable tbody");
    users.forEach(({ name, email }) => {
        const row = table.insertRow();
        const [cell1, cell2] = [row.insertCell(0), row.insertCell(1)];
        [cell1.textContent, cell2.textContent] = [name, email];
    });
}

window.onload = populateTable;
