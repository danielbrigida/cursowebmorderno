const agentes = new Promise((resolve,reject) => {
    resolve([
        "Frost",
        "Rook",
        "Kaid",
    ]);
})

let primeiroAgente =  agentes => agentes[0];
let primeiraLetra =  agente => agente[0];


agentes.then(primeiroAgente)
    .then(primeiraLetra)
    .then(console.log);


agentes.then( agentes => agentes[0])
    .then( agente => agente[0])
    .then(agente => console.log(agente[0]));