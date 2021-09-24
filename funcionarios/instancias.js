// Exemplo de instância única na execução
const unica1 = require("./instancia-unica");
const unica2 = require("./instancia-unica");

unica1.init();
unica2.init();

console.log(unica1.valor);

// Exemplo de instância nova e multipla
const nova1 = require("./instancia-nova")();
const nova2 = require("./instancia-nova")();

nova1.init();
nova2.init();

console.log(nova1.valor);

// npm run dev