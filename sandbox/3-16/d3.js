d3.select("body").style("color","black");

var data=[4,8,15,16,23,42]

var chart = d3.select(".chart");

var bar = chart.selectAll("div");

var barUpdate = bar.data(data);

var barEnter = barUpdate.enter().append("div");

barEnter.style("width", function(d) {
    return d * 10 + "px"; });
