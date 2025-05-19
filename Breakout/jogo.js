const canvas = document.getElementById("canvas_1");
const ctx = canvas.getContext("2d");

let fase = 1;
let jogoPausado = false;

let balls = [
  {
    x: canvas.width / 2,
    y: canvas.height - 60,
    radius: 8,
    dx: 4,
    dy: -4
  }
];

const paddle = {
  width: 100,
  height: 15,
  x: canvas.width / 2 - 50,
  y: canvas.height - 30,
  speed: 10,
  right: false,
  left: false
};

const brick = {
  rowCount: 5,
  colCount: 8,
  width: 60,
  height: 20,
  padding: 10,
  offsetTop: 50,
  offsetLeft: 30,
  offsetRight:18
};

let bricks = [];
let powers = [];

function criarBlocos() {
  bricks = [];
  for (let c = 0; c < brick.colCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brick.rowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
}

function desenharBlocos() {
  for (let c = 0; c < brick.colCount; c++) {
    for (let r = 0; r < brick.rowCount; r++) {
      if (bricks[c][r].status === 1) {
        const bX = c * (brick.width + brick.padding) + brick.offsetLeft;
        const bY = r * (brick.height + brick.padding) + brick.offsetTop;
        bricks[c][r].x = bX;
        bricks[c][r].y = bY;
        ctx.fillStyle = "orange";
        ctx.fillRect(bX, bY, brick.width, brick.height);
      }
    }
  }
}

function desenharPoderes() {
  ctx.fillStyle = "red";
  powers.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  });
}

function desenharBolas() {
  ctx.fillStyle = "cyan";
  balls.forEach(ball => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  });
}

function desenharRaquete() {
  ctx.fillStyle = "white";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function todosBlocosDestruidos() {
  for (let c = 0; c < brick.colCount; c++) {
    for (let r = 0; r < brick.rowCount; r++) {
      if (bricks[c][r].status === 1) return false;
    }
  }
  return true;
}

function mostrarMensagemFinal() {
  jogoPausado = true;
  setTimeout(() => {
    if (confirm("Fase concluída! Deseja ir para a próxima fase?")) {
      fase++;
      iniciarProximaFase();
    } else {
      resetarJogo();
    }
  }, 500);
}

function iniciarProximaFase() {
  brick.rowCount += 1;
  balls = [{
    x: canvas.width / 2,
    y: canvas.height - 60,
    radius: 8,
    dx: 4 + fase,       
    dy: -(4 + fase)
  }];
  paddle.x = canvas.width / 2 - paddle.width / 2;
  powers = [];
  criarBlocos();
  jogoPausado = false;
}

function detectarColisoes() {
  for (let c = 0; c < brick.colCount; c++) {
    for (let r = 0; r < brick.rowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        balls.forEach(ball => {
          if (
            ball.x > b.x &&
            ball.x < b.x + brick.width &&
            ball.y > b.y &&
            ball.y < b.y + brick.height
          ) {
            ball.dy *= -1;
            b.status = 0;
            if (Math.random() < 0.2) {
              powers.push({ x: b.x + brick.width / 2, y: b.y + brick.height / 2 });
            }
          }
        });
      }
    }
  }
}

function moverBolas() {
  balls.forEach(ball => {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx *= -1;
    }
    if (ball.y - ball.radius < 0) {
      ball.dy *= -1;
    }

    if (
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width &&
      ball.y + ball.radius > paddle.y &&
      ball.y + ball.radius < paddle.y + paddle.height
    ) {
      ball.dy *= -1;
    }

    if (ball.y + ball.radius > canvas.height) {
      balls.splice(balls.indexOf(ball), 1);
      if (balls.length === 0) {
        resetarJogo();
      }
    }
  });
}

function moverRaquete() {
  if (paddle.right && paddle.x + paddle.width < canvas.width) {
    paddle.x += paddle.speed;
  } else if (paddle.left && paddle.x > 0) {
    paddle.x -= paddle.speed;
  }
}

function moverPoderes() {
  powers.forEach(p => {
    p.y += 3;
    if (
      p.x > paddle.x &&
      p.x < paddle.x + paddle.width &&
      p.y > paddle.y &&
      p.y < paddle.y + paddle.height
    ) {
      aplicarPoder();
      powers.splice(powers.indexOf(p), 1);
    }
    if (p.y > canvas.height) {
      powers.splice(powers.indexOf(p), 1);
    }
  });
}

function aplicarPoder() {
  if (balls.length >= 10) return;

  const novasBolas = [];
  balls.forEach(ball => {
    if (balls.length + novasBolas.length < 10) {
      novasBolas.push({ x: ball.x, y: ball.y, radius: ball.radius, dx: -ball.dx, dy: ball.dy });
    }
    if (balls.length + novasBolas.length < 10) {
      novasBolas.push({ x: ball.x, y: ball.y, radius: ball.radius, dx: ball.dx, dy: -ball.dy });
    }
  });

  balls = balls.concat(novasBolas);
}

function resetarJogo() {
  fase = 1;
  brick.rowCount = 5;
  balls = [{
    x: canvas.width / 2,
    y: canvas.height - 60,
    radius: 8,
    dx: 4,
    dy: -4
  }];
  paddle.x = canvas.width / 2 - paddle.width / 2;
  powers = [];
  criarBlocos();
  jogoPausado = false;
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenharBolas();
  desenharRaquete();
  desenharBlocos();
  desenharPoderes();
  detectarColisoes();

  if (!jogoPausado && todosBlocosDestruidos()) {
    mostrarMensagemFinal();
  }
}

function atualizar() {
  if (!jogoPausado) {
    moverBolas();
    moverRaquete();
    moverPoderes();
  }
}

function loop() {
  atualizar();
  desenhar();
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") paddle.right = true;
  else if (e.key === "ArrowLeft") paddle.left = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") paddle.right = false;
  else if (e.key === "ArrowLeft") paddle.left = false;
});

criarBlocos();
loop();