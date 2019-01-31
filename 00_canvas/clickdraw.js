var canvas =document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var width=canvas.width;
var height=canvas.height;
var toggle=0;
var btn1 = document.getElementById("clear");
var btn2 = document.getElementById("toggle");
var mode = document.getElementById("mode");
mode.innerHTML="draw-a-rectangle mode";
btn1.addEventListener("click",function(){
    ctx.clearRect(0,0,width,height);
});
btn2.addEventListener("click",function(){
	if(toggle){
		mode.innerHTML="draw-a-rectangle mode";
		toggle=0;
	}
	else{
		mode.innerHTML="draw-a-dot mode";
		toggle=1;
	}
});
canvas.addEventListener("click",function(e){
    if(toggle){
		ctx.fillStyle="blue";
		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, 40, 0, Math.PI*2, true);
		ctx.fill();
	}
	else{
		ctx.fillStyle="red";
		ctx.beginPath();
		ctx.fillRect(e.clientX-60,e.clientY-60,100,100);
		ctx.fill();
	}
});