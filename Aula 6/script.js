// document.getElementById("p_1").innerHTML;
// console.log(p1);

// document.getElementById("p_1").innerHTML="Novo Texto";




//exemplo1
//let nome = prompt("Digite o seu nome!");
// idade = prompt("Digite sua idade!");
//let ano_atual = 2025;

//let ano_nascimento = ano_atual - idade;

//let resposta_ex1 = "Olá " + nome + ", Seu ano de nascimento é " + ano_nascimento + "!"
//document.getElementById("ex1").innerHTML = resposta_ex1;

function imprimeFrase(frase){
    document.getElementById("exf").innerHTML = frase;
}
imprimeFrase("Hello World");

imprimeFrase("Olá Mundo");


function soma(a,b){
    return a + b;
}
let c = soma(4,6);
console.log(c);
console.log (soma(3,2));



function ex_input(){
    let v = document.getElementById("num_1").value

    document.getElementById("exf").innerHTML = v;
}



function ex3(){

    let num1 = parseInt(document.getElementById("ex3_num1").value);
    let num2 = parseInt(document.getElementById("ex3_num2").value);

    resp = soma(num1,num2);
    document.getElementById("ex3_resp").innerHTML = resp;
}

function mult (a,b){
    return  a * b;
}
function ex4(){

    let num1 = parseInt(document.getElementById("ex4_num1").value);
    let num2 = parseInt(document.getElementById("ex4_num2").value);

    

    let resp = " ";
    if(num1 < 0 || num2 < 0){
        resp = soma(num1,num2);

    }else{
        resp = mult(num1,num2);
    }

    
    document.getElementById("ex4_resp").innerHTML = resp;
}