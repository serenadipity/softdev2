var demstates = {"Alabama": 53, "Alaska": 16, "Arizona": 75, "Arkansas" : 32, "California": 475, "Colorado": 66, "Connecticut": 55, "Delaware": 21, "Florida": 214, "Georgia": 102, "Hawaii": 25, "Idaho": 23,
"Illinois": 156, "Indiana": 83, "Iowa": 44, "Kansas": 33, "Kentucky": 55, "Louisiana": 51, "Maine": 25, "Maryland": 95, "Massachusetts": 91, "Michigan": 130, "Minnesota": 77, "Mississippi": 36,
"Missouri": 71, "Montana": 21, "Nebraska": 25, "Nevada": 35, "New Hampshire": 24, "New Jersey": 126, "New Mexico": 34, "New York": 257, "North Carolina": 107, "North Dakota": 18, "Ohio": 143, "Oklahoma": 38,
"Oregon": 61, "Pennsylvania": 189, "Rhode Island": 24, "South Carolina": 53, "South Dakota": 20, "Tennessee": 67, "Texas": 222, "Utah": 33, "Vermont": 16, "Virginia": 95, "Washington": 101, "West Virginia": 29,
"Wisconsin": 86, "Wyoming": 14};

var demallotted = ["Texas", "Florida", "Ohio", "Illinois", "Georgia", "Michigan", "Virginia", "Virginia", "North Carolina", "Massachusetts", "Alabama", " Tennessee", "South Carolina", "Louisiana", "Missouri", "Minnesota", "Colorado", "Iowa", "Arkansas",
"Nevada", "Oklahoma", "Nebraska", "Kansas", "Maine", "New Hampshire"];

var repstates = {
  "Alabama": 50,
  "Alaska": 28,
  "Arizona": 58,
  "Arkansas": 40,
  "California": 172,
  "Colorado": 37,
  "Connecticut": 28,
  "Delaware": 16,
  "Florida": 99,
  "Georgia": 76,
  "Hawaii": 19,
  "Idaho": 32,
  "Illinois": 69,
  "Indiana": 57,
  "Iowa": 30,
  "Kansas": 40,
  "Kentucky": 46,
  "Louisiana": 46,
  "Maine": 23,
  "Maryland": 38,
  "Massachusetts": 42,
  "Michigan": 59,
  "Minnesota": 38,
  "Mississippi": 40,
  "Missouri": 52,
  "Montana": 27,
  "Nebraska": 36,
  "Nevada": 30,
  "New Hampshire": 23,
  "New Jersey": 51,
  "New Mexico": 24,
  "New York": 95,
  "North Carolina": 72,
  "North Dakota": 28,
  "Ohio": 66,
  "Oklahoma": 43,
  "Oregon": 28,
  "Pennsylvania": 71,
  "Rhode Island": 19,
  "South Carolina": 50,
  "South Dakota": 29,
  "Tennessee": 58,
  "Texas": 155,
  "Utah": 40,
  "Vermont": 16,
  "Virginia": 49,
  "Washington": 44,
  "West Virginia": 34,
  "Wisconsin": 42,
  "Wyoming": 29
};


var repallotted = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Hawaii", "Idaho", "Michigan", "Mississippi", "Wyoming",
  "Florida", "Illinois", "Missouri", "North Carolina", "Ohio"
];

var demdelegates = d3.values(demstates);
var repdelegates = d3.values(repstates);
var stateNames = d3.keys(demstates);

var demfoo = d3.scale.linear()
  .domain([0,d3.max(demdelegates)])
    .range([0,700]);

var repfoo = d3.scale.linear()
  .domain([0,d3.max(repdelegates)])
    .range([0,700]);

d3.select(".chart")
  .selectAll("div")
    .data(stateNames)
  .enter().append("div")
    .style("width", function(m) {
          return demfoo(demstates[m]) + "px";})
    .text(function(m) { return m + ": " +  states[m]; })
    .style("background-color", function(m) {
          if (demallotted.indexOf(m) === -1) {
            return "steelgray";
          } else {
            return "steelblue";
          }
    });

var partytransition = function() {
  d3.select(".chart")
    .selectAll("div").transition()
    .duration(3000)
    .style("width", function(m) {
      return repfoo(repstates[m]) + "px";
    })
    .text(function[m] {
      return m + ": " + repstates[m];
    })
    .style("background-color", function(m) {
          if (repallotted.indexOf(m) === -1) {
            return "steelgray";
          } else {
            return "steelblue";
          }
    });
}