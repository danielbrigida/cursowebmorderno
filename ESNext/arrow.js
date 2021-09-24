//ARROW FUNCTION SEMPRE É ANONIMA
const soma = (a,b) => a + b;

console.log(soma(5,10));

// node THIS == EXPORTS
// front THIS == GLOBAL

//VALOR DEFAULT
const qualSeuNome = (nome = "Anônimo") => {
    return `Meu nome é ${nome}`;
}
console.log(qualSeuNome());

// Operador Rest
function total(...numeros) {
    console.log(numeros);

    let total = 0;
    numeros.forEach((value) => {
        total +=  value;
    });

    return total;
}

console.log(total(1,2,3,4,5));