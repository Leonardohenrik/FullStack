const ctx = document.getElementById("canvas_1").getContext("2d");

function fundo() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 300);
}

function Titulo() {
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Canvas", 120, 40);
}

function Quadrados() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 50, 50);

    ctx.fillStyle = "red";
    ctx.fillRect(250, 0, 50, 50);

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 250, 50, 50);

    ctx.fillStyle = "black";
    ctx.fillRect(250, 250, 50, 50);

    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 130, 20, 20);

    ctx.fillStyle = "cyan";
    ctx.fillRect(280, 130, 20, 20);

    ctx.fillStyle = "red";
    ctx.fillRect(140, 140, 20, 20);
}

function Linhas() {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 150);
    ctx.stroke();

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(150, 150);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();
}

function ArcosCentro() {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(150, 150, 40, Math.PI, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 150, 60, Math.PI, 0);
    ctx.stroke();
}

function Circulos() {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(150, 150, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(80, 200, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(220, 200, 15, 0, 2 * Math.PI);
    ctx.fill();
}

function ArcosBase() {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(150, 300, 40, Math.PI, 0);
    ctx.fill();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(150, 300, 60, Math.PI, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 300, 40, Math.PI, 0);
    ctx.stroke();
}

function desenharCanvas() {
    fundo(); 
    Titulo();
    Quadrados();
    Linhas();
    ArcosCentro();
    Circulos();
    ArcosBase();
}

desenharCanvas();
