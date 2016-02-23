/* 
   Serena Chan
   SoftDev2 Pd 6
   HW#3 -- DVD!
   2016-2-10
*/

var c = document.getElementById("dotanim");
var ctx = c.getContext("2d");

ctx.fillStyle= "#000066";
ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0,c.width,c.height);

var g = true;
var r = 0;
var frameID;

var drawDot = function drawDot(e) {
    ctx.clearRect(1,1,c.width-2,c.height-2);
    if (r==(c.width/2)) {
      g = false;
    }
    else if (r==0) {
      g = true;
    }

    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    if (g) {
      r = r + 1;
    }
    else {
      r = r -1;
    }
    frameID = window.requestAnimationFrame(drawDot);
}

var stop = function stop(e) {
    window.cancelAnimationFrame(frameID);
}

var x;
var y;
var right = false;
var left = false;
var top = false;
var bottom = false;

var dvd = function dvd(e) {
    ctx.clearRect(1,1,c.width-2,c.height-2);
    x = c.width/2;
    y = c.height/2;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    ctx.beginPath();
    ctx.drawImage(logo,x,y,100,75);
    if (bottom) {
	y = y + 1;
	top = false;
    }
    if (left) {
	x = x + 1;
    }
    if (right) {
	x = x - 1;
    }
    if (top) {
	y = y - 1;
	bottom = false;
    }
    

}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stop);
dvdButton.addEventListener("click", dvd);

//var logo = newImage();
//logo.src = "filename";
//ctx.drawImage(logo,x,y,w,h);

