let agentes = new Map();

agentes.set("Finka", {"tipo" : "ataque"});
agentes.set("Zofia", {"tipo" : "ataque"});
agentes.set("Rook", {"tipo" : "defesa"});
agentes.set("Alibi", {"tipo" : "defesa"});

console.log(agentes.get('Finka'));
console.log(agentes.get('Alibi'));

let chavesVariadas = new Map([ 
    [123, 'teste'],
    ['ola', function () {
        return "Hello World";
    }]
]);

console.log(chavesVariadas.get('ola')());
console.log(chavesVariadas.get(123));
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.delete(123));
console.log(chavesVariadas.has(123));