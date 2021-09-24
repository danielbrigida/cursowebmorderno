const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function() {
    console.log("Executando Tarefa!", new Date().getSeconds())
});

setTimeout(function() {
    tarefa1.cancel();
    console.log('Cancelando Tarefa!');
},20000);

// setInterval executa uma função em tempos em tempos