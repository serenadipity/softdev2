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

var x = c.width/2;
var y = c.height/2;
var right = false;
var left = false;
var top = false;
var bottom = false;

var dvd = function dvd(e) {

  ctx.clearRect(1,1,c.width-2,c.height-2);
  var logo = new Image();
  logo.src = "logo_dvd.jpg";
  ctx.beginPath();
  ctx.drawImage(logo,x,y,100,75);

  if (x >= (c.width-101)) {
    right = true;
    left = false;
  }

  if (x <= 1) {
    right = false;
    left = true;
  }

  if (y >= (c.height-76)) {
    bottom = true;
    top = false;
  }

  if (y <= 1) {
    top = true;
    bottom = false;
  }

  if (left) {
    x = x + 1;
  }
  else if (right) {
    x = x - 1;
  }
  else {
    x++;
  }
  if (bottom) {
    y--;
  }
  else if (top) {
    y++;
  }
  else {
    y++;
  }
    
  frameID = window.requestAnimationFrame(dvd);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stop);
dvdButton.addEventListener("click", dvd);

