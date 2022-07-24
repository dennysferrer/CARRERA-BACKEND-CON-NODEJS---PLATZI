const saludo = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Saludos señor(a) ${nombre}`);

        }, 2000);
        resolve();
        reject('Se generó un error en la llamada de la función saludo ...');
    });
}

const hablar = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola Mundo, estoy hablando ...');
        }, 3000);
        resolve();
        reject('Se generó un error en la llamada de la función hablar ...');
    });
}

const llamadoSaludo = async () => {
    await saludo('Dennys Ferrer');
    
}

const llamadoHablar = async () => {
    await hablar();
}

llamadoSaludo();
llamadoHablar();
