require("colors");


var http = require("http");

var express = require("express");

var app = express()

app.use(express.static("./public/Atividade_3/Atividade 2.html"));

var server = http.createServer(app);

server.listen(80);



console.log("Servidor Rodando".rainbow);



