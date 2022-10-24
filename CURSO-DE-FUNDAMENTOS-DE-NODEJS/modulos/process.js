const process = require('process');

process.on('exit', () => {
    console.log('El proceso termino');
});

