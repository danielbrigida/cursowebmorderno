let nome = "Daniel";

for(let value of nome) {
    console.log(value);
}

let times = ["Flamengo","Corinthians", "RedBull Bragantino"];

// igual foreach
for(let time of times) {
    console.log(time);
}

let agentes = new Map();

agentes.set("agente1","Kaid");
agentes.set("agente2","Thatcher");
agentes.set("agente3","Alibi");

for (let [key,value] of agentes) {
    console.log(value);
    console.log(key);
}

let linguagens = [
    "Javascript",
     "PHP",
];

for (let linguagem of linguagens) {
    console.log(linguagem);
}

let devs = new Set();

devs.add("Daniel")
.add("Edivaldo")
.add("Lucas");

for (let dev of devs) {
    console.log(dev);
}

let series = {
    "vikings" : true,
    "grimm": true,
    "the walking dead": true,
};

let series2 = new Object();

series2.gameofthrones = true;
console.log(series2);

/* 
Não funciona para objeto
for (let serie of series2) {
    console.log(serie);
}*/