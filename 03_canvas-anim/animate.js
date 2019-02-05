//LuMing -- Jack Lu, Matthew Ming
//SoftDev Pd08
//2019-01-04
//K03 - They lock us in the tower whenever we get caught

const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

var requestID;
var radius = 1;
var growing = true;			


var clear=function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height)
}
var drawDot = function()
{
	if ( radius >= canvas.width / 2 || radius <= 0)
	{
		growing = !growing
	}

	if (growing)
	{
		radius++;
	}
	else
	{
		radius--;
	}

	clear();
	
	ctx.fillStyle = "#00FFFF";
	ctx.beginPath();
	ctx.ellipse(canvas.width / 2, canvas.height / 2, radius, radius, 0, 0, 2 * Math.PI);
	ctx.stroke;
	ctx.fill();
	
	requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function(e)
{
    window.cancelAnimationFrame(requestID);
};

document.getElementById('circle').addEventListener('click', drawDot);
document.getElementById('stop').addEventListener('click', stopIt);
