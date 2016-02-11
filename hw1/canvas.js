/* Javascript for Canvas, Serena Chan Pd 6 */

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

/* sets the color used to fill in a drawing */
ctx.fillStyle= "#000066";

/* creates a filled rectangle; parameters are as follows: 
(x-coordinate, y-coordinate, width, height) */ 
ctx.fillRect(70,70,300,300);

/* sets color used for strokes */
ctx.strokeStyle = "#FFFFFF";

/* creates a rectangle with no fill; parameters are as follows: 
(x-coordinate, y-coordinate, width, height)*/
ctx.strokeRect(100,100,200,200);

/*indicates the beginning of a list of path commands to create
vector shapes */
ctx.beginPath();

/* adds a point to the path; parameters are as follows:
(x-coordinate, y-coordinate) */
ctx.moveTo(300,300);

/* adds a new point to the path and creats a line to that point from the
last specified point; parameters are as follows:
(x-coordinate, y-coordinate) */
ctx.lineTo(400,400);

ctx.moveTo(100,300);
ctx.lineTo(0,538);
ctx.moveTo(100,100);
ctx.lineTo(0,0);
ctx.moveTo(300,100);
ctx.lineTo(538,0);
ctx.moveTo(500,300);

/* draws a circle; parameters are as follows:
(center xcor, center ycor, radius, starting angle, ending angle)
note: all angles are in radians*/
ctx.arc(500,300,50,0*Math.PI,1.5*Math.PI);

/* allows you to set font attributes such as font type and size */
ctx.font = "30px arial";

/* allows you to fill the text with color; parameters are as follows:
(text, x-coordinate, y-coordinate)*/
ctx.fillText("Lorem ipsum",18,20);

/* draws the specified path onto the canvas with strokes */
ctx.stroke();

/* fills the current path drawing */
ctx.fill();

/* ends the path */
ctx.closePath();