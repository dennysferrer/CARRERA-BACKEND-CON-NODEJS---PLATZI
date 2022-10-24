const bcrypt = require('bcrypt');

const password = '123456Holaaaa';

const encriptar = (dato) => {
    new Promise((resolve, reject) => {
        bcrypt.hash(password, 5, (error, hash) => {
            return hash;
        });
        resolve();
        reject('Se presento error al encriptar el dato...');
    });
}

const Encriptar = async () => {
    const datoEncriptado = await encriptar(password);
    console.log(datoEncriptado);
}

Encriptar()

