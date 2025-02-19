/* Nota Importante: 
    Es fundamental tener en cuenta que el código proporcionado por HackerRank en su plataforma 
    no se puede ejecutar de manera local sin antes modificar sus parámetros. 
    
    Por ello, en cada problema habrá dos archivos:
    1. `main.js`: Contendrá el código original de HackerRank junto con la solución.
    2. `test.js`: Adaptado para ejecutarse localmente. Para probar la solución, 
        basta con ejecutar el comando "node test.js" en la terminal.
*/
'use strict';

const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let inputLines = [];
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine() {
    return inputLines[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

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

function main() {
    const ws = fs.createWriteStream(process.env['OUTPUT_PATH']);

    const a = readLine().trim().split(' ').map(Number);
    const b = readLine().trim().split(' ').map(Number);

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');
    ws.end();
}
