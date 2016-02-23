/* 
   Serena Chan
   SoftDev2 Pd 6
   HW#3 -- !
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

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stop);


