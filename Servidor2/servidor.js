var http = require("http");

var express = require("express");

var app = express();

app.use(express.static("./public"));

var server = http.createServer(app);

server.listen(3000);

console.log("Servidor está online");

let bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());





app.get("/cadastro", function(req, resp){
    let Nome = req.query.nome;
    let Email = req.query.email;
    let Senha = req.query.senha;
    let Nascimento = req.query.nascimento;

    console.log(Nome, Email, Senha, Nascimento);

    resp.redirect("resposta.html");

});

app.post("/cadastro", function(req, resp){
    let Nome = req.body.nome;
    let Email = req.body.email;
    let Senha = req.body.senha;
    let Nascimento = req.body.nascimento;
    
    console.log(Nome, Email, Senha, Nascimento);

    resp.redirect("resposta.html");
})



