// sem promise
const http =  require('http');

const getTurma =  (letra, callback) => {

    const url  = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    http.get(url, res => {
        let resultado = "";

        res.on('data', dados => {
            resultado += dados;
        });

        res.on('end', () => {
            callback(JSON.parse(resultado));
        });
    });
}

let nomes = [];

getTurma("A", alunos => {
    alunos.map((aluno) => {
        nomes.push("A: " + aluno.nome);
    });

    getTurma("B", alunos => {
        alunos.map((aluno) => {
            nomes.push("B: " + aluno.nome);
        });
       
        getTurma("C", alunos => {
            alunos.map((aluno) => {
                nomes.push("C: " + aluno.nome);
            });
            console.log(nomes);
        });   
    });   

});