// Function to insert a new row at the top of the table
function insert_Row() {
  let table = document.getElementById("sampleTable");
  let newRow = table.insertRow(0); // Insert a new row at the top (index 0).

  // Create and set content for the left cell (cell 0)
  let newCell1 = newRow.insertCell(0);
  newCell1.innerText = "New Cell1";

  // Create and set content for the right cell (cell 1)
  let newCell2 = newRow.insertCell(1);
  newCell2.innerText = "New Cell2";
}
