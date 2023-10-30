
function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
  let newtable = document.createElement("tr");
  
  let newcell = document.createElement("td");
  newcell.innerText = "New Cell1";
  let newcell2 = document.createElement("td");
  newcell2.innerText= "New Cell2";
  newtable.append(newcell,newcell2);
 table.appendChild(newtable,table);
}
