
// Não é global
console.log(this === module.exports);

function teste() {
    // vira global
    console.log(this === module.exports);
}

teste();