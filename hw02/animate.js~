/* 
   Serena Chan
   SoftDev2 Pd 6
   HW#2 -- Animate!
   2016-2-10
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

ctx.fillStyle= "#000066";
ctx.strokeStyle = "#000000";
ctx.strokeRect(10,10,520,520);

var prevX;
var prevY;

var circle = function circle(e) {
    ctx.beginPath();
    ctx.moveTo(x,y);
/*
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
    if (prevX != null) {
	ctx.lineTo(prevX,prevY);
    }
    ctx.stroke();
    prevX = x;
    prevY = y;
*/
    ctx.closePath();
}

clear.addEventListener("click", function(e){
    e.preventDefault();
    ctx.clearRect(10,10,520,520);
    prevX = null;
})

c.addEventListener("click",function(e) {
    circle(e);
});
