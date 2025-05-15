let canvas = document.getElementById("canvas_1")
let context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(50 , 50 , 100 , 100)
// context.lineWidth = 10
// context.strokeStyle = "blue"
// context.strokeRect(50 , 50 , 100 , 100)


// context.save();
// context.fillStyle = "black"
// context.fillRect(200 , 50 , 100 , 100)
// context.lineWidth = 10
// context.strokeStyle = "green"
// context.strokeRect(200 , 50 , 100 , 100)


// context.restore();
// context.fillRect(350 , 50 , 100, 100)


// let imagem = new Image()

// imagem.src = "blackhole.png"

// imagem.onload = function(){
//     context.drawImage(imagem , 50 , 50 , 100 , 100)
//     context.drawImage(imagem , 200 , 50 , 100 , 100)
// }


context.beginPath();
context.moveTo(75 , 250);
context.lineTo(150 , 50);
context.lineTo(225 , 250);
context.lineTo(50 , 120);
context.lineTo(250 , 120);
context.lineTo(75 , 250);
context.lineWidth = 6;
context.strokeStyle = "blue";
context.stroke();


context.beginPath();
context.arc(50 , 50 ,40 ,90*Math.PI / 180 , 270*Math.PI / 180 , false);
context.fill();
context.stroke();


context.beginPath();
context.arc(150 , 50 ,40 ,90*Math.PI / 180 , 270*Math.PI / 180 , true);
context.fill();
context.fillStyle = "red"
context.stroke();


context.beginPath();
context.arc(250, 50 , 40 , 0 , 2*Math.PI);
context.fill();
context.stroke();



            
