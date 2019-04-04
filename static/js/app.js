// from data.js
var tableData = data;

function buildTable(filter) {
    let tbody = d3.select("#ufo-table tbody")
    tbody.text("")

    tableData.forEach(function(row){
        let datetime = row["datetime"]
        if (filter != null && filter != "" && datetime != filter){
            return
        }
    
        let tr = tbody.append("tr")
        
        tr.append("td").text(row["datetime"]);
        tr.append("td").text(row["city"]);
        tr.append("td").text(row["state"]);
        tr.append("td").text(row["country"]);
        tr.append("td").text(row["shape"]);
        tr.append("td").text(row["durationMinutes"]);
        tr.append("td").text(row["comments"]);
    });
    
}

d3.select("#datetime").on("keyup", function(){
    let value= d3.select("#datetime").property("value")
    buildTable(value)
})

buildTable(null)