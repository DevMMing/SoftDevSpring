//Matthew Ming
//SoftDev Pd08
//2019-03-13
//K10 - Ask Circles [Change || Die]

//Initialization
var pic = document.getElementById("vimage");

//size of dot
const radius = 5;

//gets button with id "clear" and runs the following function when clicked
document.getElementById('but_clear').addEventListener('click', function(e)
	{
	while (pic.hasChildNodes()){
		pic.removeChild(pic.lastChild)
	}
	});

//function to get mouse position inside the canvas
function getMousePos(e) 
{
	//returns two values, x and y, representing the coordinates relative to the event provided in the parameters
	return { x: e.offsetX, y: e.offsetY };
}

var children = [];

//pic == canvas
pic.addEventListener('click', function(e)
	{
		var mousePos = getMousePos(e);
		console.log(mousePos);
		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx", mousePos.x);
		c.setAttribute("cy", mousePos.y);
		c.setAttribute("r", radius);
		c.setAttribute("fill", "red");
		c.setAttribute("stroke", "black");
		pic.appendChild(c);
		children.push(mousePos);
		console.log(children);
	});
