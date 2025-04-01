let canvas_1 = document.getElementById("canvas_1");
let ctx = canvas_1.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "black";
ctx.fillRect(250,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidht = 2;
ctx.fillStyle = "yellow";
ctx.fillRect(0,250,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(0,0);
ctx.lineTo(250,250);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidht = 2;
ctx.fillStyle = "green";
ctx.fillRect(250,250,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidht = 2;
ctx.moveTo(300,0);
ctx.lineTo(0,300);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();










