require("colors");

const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Variável para armazenar o usuário cadastrado
let usuarioSalvo = null;

// Rota principal → Projects.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "projeto.html"));
});

// Página de cadastro
app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "cadastro.html"));
});

// Processa o cadastro
app.post("/cadastra", (req, res) => {
  const { nome, email, senha } = req.body;
  usuarioSalvo = { nome, email, senha };
  res.send("Cadastro realizado com sucesso! <a href='/login'>Ir para login</a>");
});

// Página de login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "login.html"));
});

// Processa o login e renderiza a resposta com EJS
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    res.render("resposta", { sucesso: true, nome: usuarioSalvo.nome });
  } else {
    res.render("resposta", { sucesso: false });
  }
});

// Criando o servidor na porta 80
const server = http.createServer(app);
server.listen(80, () => {
  console.log("Servidor Rodando".rainbow);
});


