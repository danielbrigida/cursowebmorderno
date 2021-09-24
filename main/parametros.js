module.exports = function (...nomes){
    return nomes.map(function(nome) {
        return `Meu nome é ${nome}`;
    });
}