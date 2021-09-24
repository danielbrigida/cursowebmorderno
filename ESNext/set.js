
// Não têm indice e ignora repetição
let times = new Set();

times.add("Corinthians");
times.add("RedBull Bragantino").add("Palmeiras").add("Flamengo").add("Palmeiras");
console.log(times);
console.log(times.size);
console.log(times.has('Flamengo'));
console.log(times.delete('Palmeiras'));


let agentesRuins = ['Tachanka','Clash','Nok', 'Tachanka'];
let agentes = new Set(agentesRuins);
console.log(agentes);