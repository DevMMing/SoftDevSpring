//Matthew Ming
//SoftDev Pd08
//2019-03-13
//K10 - Ask Circles [Change || Die]

//Initialization
var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");
var move = document.getElementById("but_move");
var requestID;
//size of dot
const radius = 25;

//gets button with id "clear" and runs the following function when clicked
clear.addEventListener('click', function(e)
	{
	while (pic.hasChildNodes()){
		pic.removeChild(pic.lastChild);
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
	return Math.floor(Math.random()*x);
}
var movement = function(e){
	window.cancelAnimationFrame(requestID);
	var children=pic.childNodes;
	var vel=new Array(children.length);
	vel.fill([1,1])
	var animate = function(){
        console.log(requestID);
		for(i=1;i<children.length;i++){
			circX=Number(children[i].getAttribute("cx"));
			circY=Number(children[i].getAttribute("cy"));
			console.log("this is " +circX);
			console.log("this is "+circY);
        // touch top or bot
        if ( circX -radius - 1 == 0 || circX +radius +1== Number(pic.getAttribute("width")) ){
            vel[i][0] *= -1;
        }
        // touch sides
        if ( circY - radius - 1 == 0 || circY + radius + 1== Number(pic.getAttribute("height")) ){
            vel[i][1] *= -1;
        }
		circX+=vel[i][1];
		circY+=vel[i][1];
		children[i].setAttribute("cx",circX);
		children[i].setAttribute("cy",circY);
		}
		requestID = window.requestAnimationFrame(animate);
    };		
	animate();
};

//clicking on "canvas"
var create= function(e){
	color=e.target.getAttribute("fill");
	var mousePos = getMousePos(e);
	if(color == null){
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("cx", mousePos.x);
			c.setAttribute("cy", mousePos.y);
			c.setAttribute("r", radius);
			c.setAttribute("fill", "red");
			c.setAttribute("stroke", "black");
			pic.appendChild(c);
	}
};
//clicking on dot
var change = function(e){
	color=e.target.getAttribute("fill");
	if(color == "red"){
		e.target.setAttribute("fill","blue");
	}
	else if(color == "blue"){
			e.target.setAttribute("cx",random(501));
			e.target.setAttribute("cy",random(501));
			e.target.setAttribute("fill","red");
		}
};	
pic.addEventListener('click', create);
pic.addEventListener('click', change);
move.addEventListener('click',movement)
