var http = require("http");

var express = require("express");

var app = express();

app.use(express.static("./Public"));

var server = http.createServer(app);

server.listen(3000);

console.log("Servidor rodando...");

let bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());

// app.set("view engine", "ejs");

// app.set("views", "./Views");

app.get("/inicio", function(requisicao, resp){
    resp.redirect("Aula_2/index.html");
});

app.post("/inicio", function(requisicao,resp){
    resp.redirect("Aula_3/index.html");
});


app.get("/cadastrar", function(requisicao, resp){
    var Nome = requisicao.query.nome;
    var Email = requisicao.query.email;
    var Senha = requisicao.query.senha;
    var Nascimento = requisicao.query.nascimento;
    console.log(Nome, Email, Senha, Nascimento);
    // resp.render("resposta.ejs", {Nome, Email, Senha, Nascimento});
});


app.post("/cadastrar", function(requisicao, resp){
    var Nome = requisicao.body.nome;
    var Email = requisicao.body.email;
    var Senha = requisicao.body.senha;
    var Nascimento = requisicao.body.nascimento;
    console.log(Nome, Email, Senha, Nascimento);
});






