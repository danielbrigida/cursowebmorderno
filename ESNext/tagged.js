function tags(partes, ...valores) {
    const resultado = [];

    valores.forEach(function(value, index) {
        value = "R$" + value.toFixed(2);
        resultado.push(partes[index],value);
    });

    return resultado.join(''); // join() == implode() do PHP
}

const preco = 30.00;

const parcela = 10;

console.log(tags `1x de ${preco} ou 3x de ${parcela}`);