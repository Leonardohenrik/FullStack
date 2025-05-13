require("colors");

const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let usuarioSalvo = null;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "projeto.html"));
});


app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "cadastro.html"));
});


app.post("/cadastra", (req, res) => {
  const { nome, email, senha } = req.body;
  usuarioSalvo = { nome, email, senha };
  res.send("Cadastro realizado com sucesso!");
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Atividade_3", "login.html"));
});


app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    res.render("resposta", { sucesso: true, nome: usuarioSalvo.nome });
  } else {
    res.render("resposta", { sucesso: false });
  }
});


const server = http.createServer(app);
server.listen(80, () => {
  console.log("Servidor Rodando".rainbow);
});


// app.get('/inicio', function(requisicao, resposta){
//     resposta.redirect('Aula_1/index.html')
// })

// app.post('/inicio', function(requisicao, resposta){
//     resposta.redirect('Aula_1/index.html')
// })

// app.get('/cadastrar', function(requisicao, resposta){
//     let nome = requisicao.query.nome;
//     let email = requisicao.query.email;
//     let senha = requisicao.query.senha;
//     let nascimento = requisicao.query.nascimento;
//     console.log(nome, email, senha, nascimento);

//     resposta.render('resposta_1.ejs', 
//         {mensagem: "Usuario cadastrado com sucesso!", usuario: nome, login: email})
// })

// app.post('/cadastrar', function(requisicao, resposta){
//     let nome = requisicao.body.nome;
//     let email = requisicao.body.email;
//     let senha = requisicao.body.senha;
//     let nascimento = requisicao.body.nascimento;
//     console.log(nome, email, senha, nascimento);

//     let data = {db_nome: nome, db_email: email, db_senha: senha, db_nascimento: nascimento}
//     usuarios.insertOne(data, function(err){
//         console.log(err)
//         if(err){
//             resposta.render('resposta_1.ejs', 
//                 {mensagem: "Erro ao cadastrar usuário!", usuario: nome, login: email})        
//         }else{
//             resposta.render('resposta_1.ejs', 
//                 {mensagem: "Usuario cadastrado com sucesso!", usuario: nome, login: email})
//         }
//     })
    
//  })

// app.get('/for_ejs', function(requisicao, resposta){
//     let num = requisicao.query.num;
//     resposta.render('exemplo_for.ejs',{tamanho: num});
// })

// app.post('/login', function(requisicao, resposta){
//     let email = requisicao.body.email;
//     let senha = requisicao.body.senha;

//     console.log(email, senha);

//     let data = {db_email: email, db_senha: senha};
//     usuarios.find(data).toArray(function(err, items){

//         if (items.length == 0) {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Usuário/senha não encontrado!"})
//           }else if (err) {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Erro ao logar usuário!"})
//           }else {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Usuário logado com sucesso!"})        
//           };
    
//     })
// })


// app.post('/atualizar_usuario', function(requisicao, resposta){
//     var data = { db_email: requisicao.body.email, db_senha: requisicao.body.senha };
//     var newData = { $set: {db_senha: requisicao.body.novasenha} };
//     console.log(data)

//     usuarios.updateOne(data,newData, function(err, result){
//         console.log(result);
//         if (result.modifiedCount == 0) {
//         resposta.render('resposta_usuario.ejs', {mensagem: "Usuário/senha não encontrado!"})
//         }else if (err) {
//         resposta.render('resposta_usuario.ejs', {mensagem: "Erro ao atualizar usuário!"})
//         }else {
//         resposta.render('resposta_usuario.ejs', {mensagem: "Usuário atualizado com sucesso!"})        
//         };
//     });
// })


// app.post('/remover_usuario', function(requisicao, resposta){
//     var data = {db_email: requisicao.body.email, db_senha: requisicao.body.senha}

//     usuarios.deleteOne(data, function(err, result){
//         console.log(result);
//         if (result.deletedCount == 0) {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Usuário/senha não encontrado!"})
//         }else if (err) {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Erro ao remover usuário!"})
//         }else {
//             resposta.render('resposta_usuario.ejs', {mensagem: "Usuário removido com sucesso!"})        
//         };
//     });

// })




// app.post("/atualizar_usuario",function(requisicao,resposta){
//     var data = {db_email : req.body.login,db_senha:req.body.senha};
//     var newData = {$set: {db_senha:req.body.novasenha}};

//     usuarioSalvo.updateOne(data,newData,function(err,result){
//         console.log(result);
//         if (result.modifiedCount == 0){
//             resposta.render("resposta_usuario.ejs",{mensagem:"Usuário/senha não existe"})
//         }else if(err){
//             resposta.render("resposta_usuario.ejs",{mensagem:"Erro ao logar usuario"})
//         }else{
//             resposta.render("resposta_usuario.ejs",{mensagem:"Usuario logado com sucesso"})
//         };
//     })


// })

// app.post("/remover_usuario",function(requisicao,resposta){
//     var data = {db_email:requisicao.body.email,db_senha:requisicao.body.senha};
//     usuarios.delete.One(data, function(err,result){
//         if (result.deletedCount == 0){
//             resposta.render("resposta_usuario.ejs",{mensagem:"Usuário/senha não encontrado"})
//         }else if(err){
//             resposta.render("resposta_usuario.ejs",{mensagem:"Erro remover usuario"})
//         }else{
//             resposta.render("resposta_usuario.ejs",{mensagem:"Usuario removido com sucesso"})
//         };

//     })
// })

