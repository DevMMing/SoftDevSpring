//Matthew Ming
//SoftDev Pd08
//2019-03-13
//K10 - Ask Circles [Change || Die]

//Initialization
var pic = document.getElementById("vimage");

//size of dot
const radius = 25;

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

function random(x)
{
	return Math.floor(Math.random()*x)
}
//pic == canvas
pic.addEventListener('click', function(e)
	{
		color=e.target.getAttribute("fill");
		var mousePos = getMousePos(e);
		console.log(mousePos);
		//clicking on "canvas"
		if(color == null){
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("cx", mousePos.x);
			c.setAttribute("cy", mousePos.y);
			c.setAttribute("r", radius);
			c.setAttribute("fill", "red");
			c.setAttribute("stroke", "black");
			pic.appendChild(c);
			a=pic.childNodes
		}
		//clicking on red dot
		else if(color == "red"){
			e.target.setAttribute("fill","blue");
		}
		//clicking on blue dot
		else{
			e.target.setAttribute("cx",random(501));
			e.target.setAttribute("cy",random(501));
			e.target.setAttribute("fill","red");
		}
	});
