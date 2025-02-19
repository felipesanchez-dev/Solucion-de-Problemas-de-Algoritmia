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
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}