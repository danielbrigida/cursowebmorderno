function falarDepoisDe(segundos,frase)
{
    // resolve rotina de sucesso da promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(frase) {
                resolve(frase); // Aceita somente um parametro
            } 
            
            reject("Ocorreu um erro!")
        }, segundos * 1000);
     });
}

// then = função da promise - no caso de sucesso - resolve
// catch =  função da promise - no caso de erro - reject
falarDepoisDe(5,"Vai Corinthians")
    .then(frase => frase.concat("!")) // Arrow function inline = retorno automático
    .then(fraseFormatada => console.log(fraseFormatada))
    .catch(error => console.log(error));