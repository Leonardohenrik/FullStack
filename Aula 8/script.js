let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function desenhar(){
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x,this.y,this.largura,this.altura);
}




let ret_1 = {
    x:0,
    y:0,
    largura:20,
    altura:20,
    cor:"red",
    desenha: desenhar
}


let ret_2 = {
    x:200,
    y:200,
    largura:20,
    altura:20,
    cor:"blue",
    desenha: desenhar
}



let ret_3 = {
    x:250,
    y:250,
    largura:30,
    altura:30,
    cor:"green",
    desenha: desenhar
}

retangulos = []
retangulos.push(ret_1)
retangulos.push(ret_2)
retangulos.push(ret_3)

for(let i = 0; i<retangulos.lenght; i++){
    retangulos[i].desenha()
}


function animacao(){
    if(ret_1.x == 300 - ret_1.largura){
        direcao = -1
    }
    if(ret_1.x == 0){
        direcao = 1
    }
    

    ret_1.x += direcao
    


    ctx.clearRect(0,0,300,300)
    ret_1.desenha()
    ret_2.desenha()
    ret_3.desenha() 

    requestAnimationFrame(animacao)



}


animacao()


document.addEventListener("keydown",function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 3
    if(tecla == "ArrowUp"){
        ret_2.y -= velocidade;
    }
    if(tecla == "ArrowDown"){
        ret_2.y += velocidade;
    }
    if(tecla == "ArrowRight"){
        ret_2.x += velocidade;
    }
    if(tecla == "ArrowLeft"){
        ret_2.x -= velocidade;
    }
})







ret_1.desenha()
ret_2.desenha()
ret_3.desenha()



