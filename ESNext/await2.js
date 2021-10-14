async function esperarSegundos(segundos)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ok");
        }, (segundos * 1000));
    });
}

async function executarEspera()
{
    console.log("Esperando...");
    await esperarSegundos(3)
    console.log("Esperando...");
    await esperarSegundos(3)
    console.log("Esperando...");
    await esperarSegundos(5)

    return "Finalizou";
}

executarEspera().then((v) => {
    console.log(v);
});