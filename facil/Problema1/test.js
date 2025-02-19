/* Nota Importante: 
    Es fundamental tener en cuenta que el código proporcionado por HackerRank en su plataforma 
    no se puede ejecutar de manera local sin antes modificar sus parámetros. 
    
    Por ello, en cada problema habrá dos archivos:
    1. `main.js`: Contendrá el código original de HackerRank junto con la solución.
    2. `test.js`: Adaptado para ejecutarse localmente. Para probar la solución, 
        basta con ejecutar el comando "node test.js" en la terminal.
*/
'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compareTriplets(a, b) {
    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        } else if (a[i] < b[i]) {
            scoreB++;
        }
    }
    return [scoreA, scoreB];
}

rl.question('Ingrese los valores de A separados por espacio: ', (inputA) => {
    const a = inputA.trim().split(' ').map(Number);
    
    rl.question('Ingrese los valores de B separados por espacio: ', (inputB) => {
        const b = inputB.trim().split(' ').map(Number);
        
        if (a.length !== b.length || a.length !== 3) {
            console.log('Ambos arreglos deben contener exactamente 3 elementos.');
        } else {
            const result = compareTriplets(a, b);
            console.log('Puntuaciones:', result.join(' '));
        }
        rl.close();
    });
});
