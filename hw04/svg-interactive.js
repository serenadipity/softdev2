var pic = document.getElementById("vimage");
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill","green");
};

/*
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

*/
var intervalID;

var grow = function() {
    //init statements
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "red");
    pic.appendChild(c);
    console.log("hi");
    var animateCode = function() {
	c = document.getElementByTagName("circle")[0];
	radius = parseInt(c.getAttribute("r"));
	c.setAttribute("r",r);
    if (grow==true){
        r++;
    }else{
        r--;
    }
    if (r>=c.width/2){
        grow=false;
    }else{
        if (r<=0){
            grow=true;
        }
    }
	intervalID = window.setInterval(animateCode,16);
    }
}

var stop = function() {
    window.clearInterval(intervalID);
}
