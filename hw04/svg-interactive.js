var pic = document.getElementById("vimage");
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill","green");
};

/*
var c = document.createElementNS(
"http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx", 250);
c.setAttribute("cy", 250);
c.setAttribute("r","75");
c.setAttribute("fill","red");
//c.setAttribute("stroke","black");

pic.appendChild(c);
*/

var drawDot = function (x,y) {
var c = document.createElementNS(
"http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change);
    pic.appendChild(c);
};

var clicked = function(e) {
    if (e.toElement == this) {
	drawDot(e.offsetX, e.offsetY);
    }
};

pic.addEventListener("click", clicked);
