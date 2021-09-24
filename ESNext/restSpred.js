// Exemplo spread

const agente = {nome : "Ace", tipo: "Ataque"} ;
const copia = {bom: true , ...agente};
console.log(copia);

const ataque = ["Zofia","Finka","Jackal","Fuse"];
const defesa = ["Rook","Frost","Wamai","Maestro"];
const operadores = [...ataque,"Osa",...defesa];

console.log(operadores);