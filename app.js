const express = require("express");

let app = express();

// criando uma rota
app.get('/', (req, res)=>res.send("Bem Vindo Henrique..."));

// criando servidor
app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))