//Matthew Ming
//SoftDev Pd08
//2019-03-12
//K09 - Connect the Dots

//Initialization
var pic = document.getElementById("vimage");

//size of dot
const radius = 5;

//gets button with id "clear" and runs the following function when clicked
document.getElementById('but_clear').addEventListener('click', function(e)
	{
	while (pic.hasChildNodes()){
		pic.removeChild(pic.lastChild)
		oldX=undefined;
		oldY=undefined;
	}
	});

//function to get mouse position inside the canvas
function getMousePos(e) 
{
	//returns two values, x and y, representing the coordinates relative to the event provided in the parameters
	return { x: e.offsetX, y: e.offsetY };
}

var lastClicked =false;
var oldX;
var oldY;
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
		if(oldX==undefined && oldY==undefined){
			oldX=mousePos.x;
			oldY=mousePos.y;
		}
		else{
			var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
			line.setAttribute("x1", oldX);
			line.setAttribute("y1", oldY);
			line.setAttribute("x2", mousePos.x);
			line.setAttribute("y2", mousePos.y);
			line.setAttribute("stroke", "black");
			pic.appendChild(line);
			oldX=mousePos.x;
			oldY=mousePos.y;
		}
	});
