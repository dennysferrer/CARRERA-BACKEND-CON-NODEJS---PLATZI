const { exec, spawn } = require('child_process');


/* exec('node errores.js', (err, stdout, sterr) => {
    if (err){
        console.log(err);
        return false;
    }
    console.log(stdout);
}) */

let proceso = spawn('dir');
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log(data.toString());
})
