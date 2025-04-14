const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const cursorSize = 20; 
let posX = canvasWidth / 2 - cursorSize / 2;
let posY = canvasHeight / 2 - cursorSize / 2;


function desenhar() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight); 
  ctx.fillStyle = "blue"; 
  ctx.fillRect(posX, posY, cursorSize, cursorSize); 
  requestAnimationFrame(desenhar);
}


canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left - cursorSize / 2;
  let mouseY = e.clientY - rect.top - cursorSize / 2;

  
  posX = Math.max(0, Math.min(mouseX, canvasWidth - cursorSize));
  posY = Math.max(0, Math.min(mouseY, canvasHeight - cursorSize));
});


desenhar();