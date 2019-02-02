//Little Mac - Rubin P. and Matthew M.
//SoftDev Pd08
//2019-01-31
//K01 - and I want to Paint It Better

//Constant variables
const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

//size of dot
const x_radius = 5;
const y_radius = 5;

//keeps track of whether the canvas is clear or not
var isClear = true;

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
			//clears the entire screen of any drawings 
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
		
		//if the canvas is cleared, no need to draw a line, otherwise, draw it
		if(!isClear)
		{
			ctx.fillStyle = 'black'; 				//set line color to black
			ctx.lineTo(mousePos.x, mousePos.y);		//draw line to current mousePos
			ctx.stroke();							//stroke the line
			console.log('drew line to ' + mousePos.x + ', ' + mousePos.y); //debug info to console
		}
	
	
		ctx.fillStyle = 'red';				//set color to red
		ctx.beginPath();					//begin the drawing
		ctx.ellipse(mousePos.x - (x_radius / 4),  mousePos.y - (y_radius / 4), x_radius, y_radius, 0, 0, 2 * Math.PI);	
		//info regarding ellipse, fills from center of mouse
		ctx.fill(); 						//fils color of the dot
		console.log('Created ellipse');		//debug info to console

		ctx.moveTo(mousePos.x, mousePos.y);	//change pen position to where the most current dot is
		console.log('moved the pen to ' + mousePos.x + ', ' + mousePos.y);	//debug info to console
		ctx.stroke();	//write the drawing to the canvas

		
		isClear = false;	//set the isClear boolean to false
	});
