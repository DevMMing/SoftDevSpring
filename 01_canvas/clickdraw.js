//Little Mac - Rubin P. and Matthew M.
//SoftDev Pd08
//2019-01-31
//K01 - and I want to Paint It Better

//Constant variables
const canvas = document.getElementById("slate");
const ctx = canvas.getContext("2d");

//defines the height and length of the rect, displays to user
var rect_height = document.getElementById("rect_height").value;
document.getElementById("display_height").innerHTML = rect_height;

var rect_length = document.getElementById("rect_length").value;
document.getElementById("display_length").innerHTML = rect_length;

//defines the x and y radius of the ellipse, displays to user
var x_radius = document.getElementById("radius").value;
var y_radius = document.getElementById("radius").value;
document.getElementById("display_radius").innerHTML = x_radius;

//keeps track of what shape to draw, displays the current state to the user
var drawRect = true;
document.getElementById("status").innerHTML = "Current Draw Mode: Rectangle";

//keeps track of whether the canvas is clear or not
var isClear = true;

//updates the value of height, length, and radius variables while also displaying them to the user
document.getElementById("rect_height").oninput = function(e)
{
	rect_height = document.getElementById("rect_height").value;
	document.getElementById("display_height").innerHTML = rect_height;
}

document.getElementById("rect_length").oninput = function(e)
{
	rect_length = document.getElementById("rect_length").value;
	document.getElementById("display_length").innerHTML = rect_length;
}

document.getElementById("radius").oninput = function(e)
{
	x_radius = document.getElementById("radius").value;
	y_radius = document.getElementById("radius").value;

	document.getElementById("display_radius").innerHTML = x_radius;
}


//gets button with id "draw" and runs the following function when clicked
document.getElementById('draw').addEventListener('click', function(e)
	{
		drawRect = !drawRect;	//sets the value of drawRect to opposite of what it is
		if (drawRect)
			document.getElementById("status").innerHTML = "Current Draw Mode: Rectangle";
		else
			document.getElementById("status").innerHTML = "Current Draw Mode: Dot";
	});

//gets button with id "clear" and runs the following function when clicked
document.getElementById('clear').addEventListener('click', function(e)
	{
		if (isClear)
		{
			console.log("Already cleared, using e.preventDefault()");
			e.preventDefault();
		}
		else
		{
			//clears the entire screen of any rect
			ctx.clearRect(0, 0, 600, 600);
			isClear = true;
		}
	});

//function to get mouse position inside the canvas
function getMousePos(e) 
{
	//returns two values, x and y, representing the coordinates relative to the event provided in the parameters
	return { x: e.offsetX, y: e.offsetY };
}

//canvas has already been initialized previously, so use that
//to check when clicked and run the following function
canvas.addEventListener('click', function(e)
	{
		//gets the mousePos, as explained by our function
		var mousePos = getMousePos(e);
		console.log(mousePos);

		if (drawRect)	//when drawRect is true, draw a rectangle
		{
			ctx.fillRect(mousePos.x, mousePos.y, rect_length, rect_height);	//fills upper-left hand corner
			//ctx.fillRect(50, 50, 100, 100); testing
		}
		else	//otherwise, draw an ellipse
		{
			ctx.beginPath();	//begin the drawing
			ctx.ellipse(mousePos.x - (x_radius / 4),  mousePos.y - (y_radius / 4), x_radius, y_radius, 0, 0, 2 * Math.PI);	//info regarding ellipse, fills center
			ctx.stroke();	//write the drawing to the canvas
		}

		isClear = false;	//set the isClear boolean to false
	});
