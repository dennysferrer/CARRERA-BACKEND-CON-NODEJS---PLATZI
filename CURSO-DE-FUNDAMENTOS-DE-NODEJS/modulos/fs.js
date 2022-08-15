const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
} 

function escribir(ruta, contenido){
    fs.writeFileSync(ruta, contenido)
}

function borrar(ruta){
    fs.unlinkSync(ruta);
}

//leer(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo2.txt', 'Soy un archivo creado desde nodejs');
borrar(__dirname + '/archivo.txt');