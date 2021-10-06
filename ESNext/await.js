const http =  require('http');

const getTurma = async (letra) => {

    const url  = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = "";
    
            res.on('data', dados => {
                resultado += dados;
            });
    
            res.on('end', () => {
                try {
                    let turma =  JSON.parse(resultado)
                    resolve(turma);
                } catch(e) {
                    reject(e)
                }    
            });
        });
    });
}
// async em função antes da chamada da API, await na chamada da funcão da api 
// retorna um async function = utilizar then para pegar retorno
let todasTurmas = async () => {
    let turmaA = await getTurma("A");
    let turmaB = await getTurma("B");
    let turmaC = await getTurma("C");

    console.log(turmaC);   


    return [].concat(turmaA,turmaB,turmaC);
}
let resultado = todasTurmas()
    .then(turmas => turmas)
    .catch(err => console.log("Ocorreu um erro"));





