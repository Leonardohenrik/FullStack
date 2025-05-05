require("colors");


var http = require("http");

var express = require("express");

var app = express()

app.use(express.static("./public"));

var server = http.createServer(app);

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://leohenrik:<1d1i2b2i>@henriks.ct5jrkx.mongodb.net/?retryWrites=true&w=majority&appName=Henriks"

const client = new MongoClient(uri, {useNewUrlParser: true});

var dbo = client.db("exemplo_bd");

var usuarios = dbo.collection("usuarios");



server.listen(80);



console.log("Servidor Rodando".rainbow);



