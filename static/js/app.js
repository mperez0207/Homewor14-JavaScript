// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function populate_table(date="")
{
    tableData.forEach(function(ufoData) {
        
        if (date === ufoData["datetime"])
        {
            tbody.append("tr").attr("class", "data_row");
        
            // console.log(ufoData);
        
            Object.entries(ufoData).forEach(function([key, value]) {
                // console.log(key, value);
                tbody.append("td").text(value)
            });
        }
        else if (date === "")
        {
            tbody.append("tr").attr("class", "data_row");
        
            // console.log(ufoData);
        
            Object.entries(ufoData).forEach(function([key, value]) {
                // console.log(key, value);
                tbody.append("td").text(value)
            });
        }
    });
}

populate_table();

var filter_button = d3.select("#filter-btn");

var date_field = d3.select("#datetime");

filter_button.on("click", function() {
    var date_filter = date_field.node().value;

    d3.selectAll("td").remove();
    d3.selectAll(".data_row").remove();

    populate_table(date_filter);
    // console.log("Button was clicked!");
    // console.log(date_filter);
})