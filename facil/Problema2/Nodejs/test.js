/* Nota Importante: 
    Es fundamental tener en cuenta que el código proporcionado por HackerRank en su plataforma 
    no se puede ejecutar de manera local sin antes modificar sus parámetros. 
    
    Por ello, en cada problema habrá dos archivos:
    1. `main.js`: Contendrá el código original de HackerRank junto con la solución.
    2. `test.js`: Adaptado para ejecutarse localmente. Para probar la solución, 
        basta con ejecutar el comando "node test.js" en la terminal.
*/
'use strict';
function simpleArraySum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}

function main() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese el tamaño del array: ', (n) => {
        rl.question('Ingrese los elementos del array separados por espacio: ', (input) => {
            const ar = input.split(' ').map(Number);
            
            if (ar.length !== parseInt(n)) {
                console.log('Error: El número de elementos no coincide con el tamaño ingresado.');
            } else {
                const result = simpleArraySum(ar);
                console.log('Suma de los elementos:', result);
            }
            
            rl.close();
        });
    });
}

main();
