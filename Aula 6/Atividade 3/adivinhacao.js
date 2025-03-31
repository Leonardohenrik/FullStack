const Random = Math.floor(Math.random() * 100);
console.log("Número aleatório gerado: ", Random);


function guess() {
    
    const palpite = parseInt(document.getElementById("palpite").value);


    if (palpite === Random) {
        document.getElementById("div_3").textContent = "Parabéns, você acertou!";
        document.getElementById("div_3").style.color = "green";
    } else if (palpite < Random) {
        document.getElementById("div_3").textContent = "O número é maior. Tente novamente!";
        document.getElementById("div_3").style.color = "red";
    } else {
        document.getElementById("div_3").textContent = "O número é menor. Tente novamente!";
        document.getElementById("div_3").style.color = "red";
    }
}