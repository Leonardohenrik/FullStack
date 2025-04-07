const canvas = document.getElementById('canvas_1');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 300, 300);

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = 'red';
ctx.fillRect(250, 0, 50, 50);

ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.arc(150, 100, 15, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.ellipse(150, 100, 3, 6, Math.PI / 4, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(150, 100, 20, Math.PI, 0);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 100, 30, Math.PI, 0);
ctx.stroke();

ctx.fillStyle = 'red';
ctx.fillRect(145, 145, 10, 10);

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(50, 50);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(250, 50);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 300);
ctx.stroke();

ctx.fillStyle = 'cyan';
ctx.fillRect(0, 120, 25, 30);
ctx.fillRect(275, 120, 25, 30);

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(80, 200, 15, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(220, 200, 15, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'cyan';
ctx.beginPath();
ctx.arc(150, 270, 40, 0, Math.PI, true);
ctx.fill();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(150, 270, 55, 0, Math.PI, true);
ctx.stroke();

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 250, 20, 40);
ctx.fillRect(20, 270, 20, 20);

ctx.fillStyle = 'black';
ctx.fillRect(280, 250, 20, 40);
ctx.fillRect(260, 270, 20, 20);
