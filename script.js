// function insert_Row() {
//     //Write your code here
  
  
// }
function insert_Row() {
  let table = document.getElementById("sampleTable");
  let newtable = document.createElement("tr");
  
  let newcell = document.createElement("td");
  newcell.innerText = "New Cell1";
  let newcell2 = document.createElement("td");
  newcell2.innerText = "New Cell2";
  newtable.appendChild(newcell);
  newtable.appendChild(newcell2);
  table.appendChild(newtable);
}
