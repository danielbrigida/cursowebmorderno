const porta  = 3003;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/agentes', (req,res,next) => {
    console.log('Middleware de teste!');
    next();
});

app.get('/agentes', (req,res,next) => {
    // Devolve em JSON
    res.send({
        "agente": "Fuse",
        "tipo": "Ataque",
        "blindagem" : 3,
        "velocidade": 1,
    }); 
});

app.get('/produtos', (req,res,next) => {
    res.send(bancoDeDados.getProdutos());
});   

app.get('/produtos/:id', (req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});  

app.post('/produtos', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    });
    res.send(produto);
});   

app.put('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco
    });
    res.send(produto);
});  

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);    
    res.send(produto);
});  

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}`)
});