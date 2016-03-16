d3.selectAll("h1").style("color","white");
//d3.selectAll("p").style("color", "white");

d3.selectAll("p")
    .data([16, 18, 20, 22])
    .style("font-size", function(d) { return d + "px"; })

d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.select("body").style("background-color", "black");
