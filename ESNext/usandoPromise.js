// sem promise
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

let nomes = [];

let alunos =   Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => 
        console.log([].concat(...turmas))
    ).catch(e => console.log(e));
    

console.log("Caiu");
