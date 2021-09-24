const fs = require('fs');

const caminho = __dirname + "/arquivo2.json";

const produto = {
    nome: "video game",
    preco : 2800.00,
    cor: "White"
}

fs.writeFile(caminho,JSON.stringify(produto), (error, conteudo) =>{
    console.log(error || "Arquivo salvo com sucesso!");
});