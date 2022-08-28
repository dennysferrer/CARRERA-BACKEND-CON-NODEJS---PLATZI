const http = require("http");

const router = (req, res) => {
    console.log('Nueva Petición');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola que tal, soy el chico de las peosias ...');
            res.end()
            break;
        default:
            res.write('Error, no se lo que quieres')
            res.end()
    }

    /* res.writeHead(201, { 'Content-Type':'text/plain' })

    res.end(); */
}

http.createServer(router).listen(3000);

console.log(`Escuchando http en el puerto 3000`);