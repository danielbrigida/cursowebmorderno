const passo1 = (contexto,response) => {
    contexto.valor1 = 'passo1';
    response();
}

const passo2 = (contexto,response) => {
    contexto.valor2 = 'passo2';
    response();
}

const passo3 = (contexto) => {
    contexto.valor3 = 'passo3';
}


const exec = (contexto, ...passos) => {
    const execPasso = indice => {
        passos && indice < passos.length &&
        passos[indice](contexto,() => execPasso(indice + 1))
    }

    execPasso(0)
}

const contexto = {};

exec(contexto,passo1,passo2,passo3)

console.log(contexto);