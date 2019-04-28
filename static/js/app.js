// from data.js
const tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

//reset button
var resetbtn = d3.select("#reset-btn");

// setup other constants
const filterBtn = d3.select("#filter-btn");
const columns = [
     "datetime",
     "city",
     "state",
     "country",
     "shape",
     "durationMinutes",
     "comments"
   ];

// Select the filter table button
const filterTable = d3.select("#filter-btn");

//create table function
function createTable(inputArray){
    tbody.selectAll("tr").remove();
    inputArray.forEach((sighting) => {
      const row = tbody.append("tr");
      for (key in sighting){
        const cell = row.append("td");
        cell.html(sighting[key])
      }
    }
  )
  };

filterTable.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputValue = inputElement.property("value");

  console.log(inputValue);

  const filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  createTable(filteredData);

});

// setup reset button
resetbtn.on("click", () => {
  tbody.html("");
//  populate(data);
  console.log("Table reset");
});


