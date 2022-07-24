const saludo = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Saludos señor(a) ${nombre}`);

        }, 2000);
        resolve();
        reject('Se generó un error en la llamada de la función saludo ...');
    });
}

const hablar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola Mundo, estoy hablando ...');
        }, 3000);
        resolve();
        reject('Se generó un error en la llamada de la función hablar ...');
    });
}

saludo('Dennys Ferrer')
    .then(() => {
        console.log('Llamando función saludo ...');
    })
    .then(hablar)
    .catch(error => {
        console.error(error);
    })