
console.time('proceso inicio')
const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promesa...');
        }, 5000)
    })
}

console.log(await promesa());
console.timeEnd('proceso');