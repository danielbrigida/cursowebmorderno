function soma(x,y) {
    return new Promise((resolve,reject) => {
        resolve(x+y);
    });
}


let multiplaSoma = Promise.all([
    soma(10,10),
    soma(100,20),
    soma(33.33,33.33),
    soma(45.10,1),
    soma(5,5)
]);

multiplaSoma
    .then(valores => valores[2])
    .then(valor =>  `O valor da soma é igual a ${valor}`)
    .then(console.log);