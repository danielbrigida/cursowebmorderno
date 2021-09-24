const numeros = { a:1,b:2,c:3};

console.log(Object.values(numeros));
console.log(Object.keys(numeros));
console.log(Object.entries(numeros));

const nome = "Daniel";
const pessoa = {
    nome,
    ola() {
        return "Boa tarde!"
    }
};

console.log(pessoa.nome, pessoa.ola());

class Animal {

}

class Cachorro extends Animal {

    falar() {
        return "AU AU AU!";
    }
}

const dog = new Cachorro();
console.log(dog.falar());