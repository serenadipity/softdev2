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
ctx.strokeRect(10,10,520,520);

/*
var dots = function dots(e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.arc(e.offsetX,e.offsetY,10,0,2*Math.PI);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
*/

var prevX;
var prevY;

var dots = function dots(e) {
	var x = e.offsetX;
	var y = e.offsetY;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,10,0,2*Math.PI);
	if (prevX != null) {
		ctx.lineTo(prevX,prevY);
	}
	ctx.stroke();
	ctx.fill();
	prevX = x;
	prevY = y;
	ctx.closePath();
}

/*
var clear = function clear(e) {
    e.preventDefault();
    ctx.clearRect(0,0,538,538);
}
*/

clear.addEventListener("click", function(e){
	e.preventDefault();
	ctx.clearRect(10,10,520,520);
	prevX = null;
})

c.addEventListener("click",function(e) {
    dots(e);
});
