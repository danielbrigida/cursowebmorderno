const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// sincrono
const conteudo = fs.readFileSync(caminho,'utf-8');
console.log(conteudo);

fs.readFile(caminho,'utf-8', function(error,conteudo) {
    const conteudoFormatado = JSON.parse(conteudo);
    console.log(conteudoFormatado.db.host);
})

// Outra forma de acessar um JSON
// Já retorna com objeto
const meuJson = require("./arquivo.json");
console.log(meuJson.db);