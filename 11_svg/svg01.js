//Matthew Ming
//SoftDev Pd08
//2019-03-15
//K11 - Ask Circles [Change || Die] ...While On the Go

//Initialization
var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");
var move = document.getElementById("but_move");
var act_move = document.getElementById("move")
var moving=false;
var requestID;
//size of dot
const radius = 25;

//gets button with id "clear" and runs the following function when clicked
clear.addEventListener('click', function(e)
	{
	while (pic.hasChildNodes){
		pic.removeChild(pic.lastChild);
	}
	    window.cancelAnimationFrame(requestID);
		moving =false;
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
var move_all = function(){
	window.cancelAnimationFrame(requestID);
	var children=pic.children;
	var vel=new Array(children.length);
	vel.fill([1,1]);
	var animate = function(){
        console.log(vel);
		for(var i=0;i<children.length;i++){
			circX=Number(children[i].getAttribute("cx"));
			circY=Number(children[i].getAttribute("cy"));
			console.log("this is " +circX);
			console.log("this is "+circY);
        // touch top or bot
        if ( circX + vel[i][1]-radius< 0 || circX +vel[i][1]+radius> Number(pic.getAttribute("width")) ){
            vel[i][0] *= -1;
        }
        // touch sides
        if ( circY + vel[i][1]-radius< 0 || circY + vel[i][1]+radius> Number(pic.getAttribute("height")) ){
            vel[i][1] *= -1;
        }
		circX+=vel[i][0];
		circY+=vel[i][1];
		children[i].setAttribute("cx",circX);
		children[i].setAttribute("cy",circY);
		}
		requestID = window.requestAnimationFrame(animate);
    };		
	animate();
};
var move_each = function() {
    window.cancelAnimationFrame(requestID)
    var w = pic.getAttribute('width')
    var h = pic.getAttribute('height')
    var elems = pic.children
    var size = Number(elems[0].getAttribute('r'))
    var vel = new Array(elems.length)
    var arrX = new Array(elems.length)
    var arrY = new Array(elems.length)
    for (i = 0; i < elems.length; i++) {
        vel[i] = [1,1]
        arrX[i] = Number(elems[i].getAttribute('cx'))
        arrY[i] = Number(elems[i].getAttribute('cy'))
    }
    var anim = function() {
        for (i = 0; i < elems.length; i++) {
            elems = pic.children
            // console.log(elems)
            var replacer = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            replacer.setAttribute('fill', elems[i].getAttribute('fill'))
            replacer.setAttribute('r', elems[i].getAttribute('r'))
            replacer.setAttribute('stroke', elems[i].getAttribute('stroke'))
            replacer.setAttribute('cx', arrX[i])
            replacer.setAttribute('cy', arrY[i])
            replacer.addEventListener('click', change )
            pic.replaceChild(replacer, elems[i])
            arrX[i] += vel[i][0]
            arrY[i] += vel[i][1]
            if (arrX[i] + vel[i][0] + size > w || arrX[i] + vel[i][0]<= 0) {
                vel[i][0] *= -1
            }
            if (arrY[i] + vel[i][1] + size > h || arrY[i] + vel[i][1]<= 0) {
                vel[i][1] *= -1
            }
        }
        requestID = window.requestAnimationFrame(anim)
    }
    anim()
}
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
move.addEventListener('click',function() {
    if (!moving) {
        move_all();
        moving = true;
    }else{
        window.cancelAnimationFrame(requestID);
        moving = false;
    }
});
act_move.addEventListener('click',function() {
    if (!moving) {
        move_each();
        moving = true;
    }else{
        window.cancelAnimationFrame(requestID);
        moving = false;
    }
});
