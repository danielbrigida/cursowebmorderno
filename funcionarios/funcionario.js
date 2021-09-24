const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");


const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (anterior, atual) => anterior.salario < atual.salario ? anterior : atual;


axios.get(url).then(response => {
    const funcionarios = response.data;
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);
    console.log(funcionario);
});

// npm start (padrão)