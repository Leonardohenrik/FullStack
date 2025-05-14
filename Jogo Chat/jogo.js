const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const nave = {
  x: canvas.width / 2 - 20,
  y: canvas.height - 60,
  width: 40,
  height: 40,
  speed: 5,
  bullets: []
};

const meteoros = [];
let keys = {};

function criarMeteoro() {
  const x = Math.random() * (canvas.width - 30);
  meteoros.push({ x, y: -40, width: 30, height: 30, speed: 2 + Math.random() * 2 });
}

function desenhaNave() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(nave.x, nave.y, nave.width, nave.height);
}

function desenhaBullets() {
  ctx.fillStyle = "yellow";
  nave.bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.width, b.height));
}

function desenhaMeteoros() {
  ctx.fillStyle = "red";
  meteoros.forEach((m) => ctx.fillRect(m.x, m.y, m.width, m.height));
}

function moverBullets() {
  nave.bullets.forEach((b) => b.y -= 7);
  nave.bullets = nave.bullets.filter((b) => b.y > 0);
}

function moverMeteoros() {
  meteoros.forEach((m) => m.y += m.speed);
}

function checarColisoes() {
  for (let i = meteoros.length - 1; i >= 0; i--) {
    for (let j = nave.bullets.length - 1; j >= 0; j--) {
      const m = meteoros[i];
      const b = nave.bullets[j];
      if (
        b.x < m.x + m.width &&
        b.x + b.width > m.x &&
        b.y < m.y + m.height &&
        b.y + b.height > m.y
      ) {
        meteoros.splice(i, 1);
        nave.bullets.splice(j, 1);
        break;
      }
    }
  }
}

function atualizar() {
  if (keys["ArrowLeft"] && nave.x > 0) {
    nave.x -= nave.speed;
  }
  if (keys["ArrowRight"] && nave.x + nave.width < canvas.width) {
    nave.x += nave.speed;
  }
  moverBullets();
  moverMeteoros();
  checarColisoes();
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaNave();
  desenhaBullets();
  desenhaMeteoros();
}

function loop() {
  atualizar();
  desenhar();
  requestAnimationFrame(loop);
}


document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (e.key === " ") {
    nave.bullets.push({
      x: nave.x + nave.width / 2 - 2,
      y: nave.y,
      width: 4,
      height: 10
    });
  }
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});


setInterval(criarMeteoro, 1000);

loop();