let potenciaDeNumeros = (valor) =>
{
    return new Promise((resolve, reject) => {
            try {
                if(valor > 0) {
                    resolve(valor * valor);
                }
                reject("O número não é valido!");
            } catch(e) {
                reject(e);
            }        
    });
}

potenciaDeNumeros(5)
    .then(data => console.log("Sucesso: " + data))
    .catch(error => console.log("Erro: " + error))
    .then(data => console.log('Fim'))
