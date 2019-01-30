var canvas =document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var width=canvas.width;
var height=canvas.height;
ctx.fillRect(0,0,100,10);
var btn1 = document.getElementById("clear");
btn1.addEventListener("click",function(){
    ctx.clearRect(0,0,width,height);
});
ctx.addEventListener("mousedown",function(){
    ctx.
});
