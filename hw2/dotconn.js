/* 
Serena Chan
SoftDev2 Pd 6
HW#2 -- Connect the Dots
2016-2-10
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

ctx.fillStyle= "#000066";
ctx.strokeStyle = "#000000";
ctx.strokeRect(10,10,500,500);

var dot = function dots(e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.arc(e.offsetX,e.offsetY,50,0,2*Math.PI);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

var clear = function clear(e) {
    e.preventDefault();
}

c.addEventListener("click",function(e) {
    dot(e);
});
