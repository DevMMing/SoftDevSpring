//LuMing -- Jack Lu, Matthew Ming
//SoftDev Pd08
//2019-01-04
//K03 - They lock us in the tower whenever we get caught

const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

// dot
var requestID;
var radius = 1;
var growing = true;

// dvd

var dvdLogoSetup = function() {
    window.cancelAnimationFrame( requestID );
	clear();
    var rectWidth = 100;
    var rectHeight = 50;
    var xVel = 1;
    var yVel = 1;

    var rectX = Math.floor( Math.random() * (canvas.width - rectWidth) );
    var rectY = Math.floor( Math.random() * (canvas.height - rectHeight) );

    // bounce on sides: inverse xvel
    // bounce on top/bot: inverse yvel

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    ctx.drawImage( logo, rectX, rectY, rectWidth, rectHeight );

    var dvdLogo = function(){
        console.log(requestID);
        // touch top or bot
        if ( rectX == 0 || rectX + rectWidth == canvas.width ){
            xVel *= -1;
        }
        // touch sides
        if ( rectY == 0 || rectY + rectHeight == canvas.height ){
            yVel *= -1;
        }
        ctx.drawImage( logo, rectX += xVel, rectY += yVel, rectWidth, rectHeight );
        requestID = window.requestAnimationFrame(dvdLogo);
    };

    dvdLogo();
}


var clear = function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
var drawDot = function()
{
    window.cancelAnimationFrame(requestID);
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
document.getElementById('dvd').addEventListener('click', dvdLogoSetup);