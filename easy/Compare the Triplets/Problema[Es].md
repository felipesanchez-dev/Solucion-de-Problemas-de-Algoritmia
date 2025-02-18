# Compara los trillizos
### Nivel de dificultal: *Facil*
#### [**Problema**](https://www.hackerrank.com/challenges/compare-the-triplets/problem)
---

Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.
La calificación para el desafío de **Alicia** es el triplete *a = (a[0], a[1], a[2])*, y la calificación para el desafío de **Bob** es el triplete *b = (b[0], b[1], b[2])*. <br>

La tarea consiste en calcular sus puntos de comparación comparando cada categoría:

* Si a[i] > b[i], entonces Alicia recibe 1 punto.
* Si a[i] < b[i], entonces Bob recibe 1 punto.
* Si a[i] = b[i], entonces ninguna de las dos personas recibe un punto.

#### Ejemplo

a = [1, 2, 3] <br>
b = [3, 2, 1] <br>

Para los elementos *0*, a Bob se le otorga un punto porque 
**a[0]** < **b[0]**.
Para los elementos iguales **a[1]** y **b[1]**, no se obtienen puntos.
Finalmente, para los elementos *2*, **a[2]** > **b[2]**, por lo que Alicia recibe un punto.

La matriz de retorno es **[1, 1]** con la puntuación de Alice primero y la de Bob en segundo lugar.

#### Descripción de la función

Complete la función compareTripletes con los siguientes parámetros:

**int a[3]:** Índice de desafío de Alicia <br>
**int b[3]:** Índice de desafío de Bob

#### Devuelve

**int[2]:** el primer elemento es la puntuación de Alice y el segundo es la puntuación de Bob

#### Formato de entrada

La primera línea contiene 3 enteros separados por espacios, **a[0]**, **a[1]** y **a[2]**, los valores respectivos en el triplete *a*.

La segunda línea contiene 3 enteros separados por espacios, **b[0]**, **b[1]** y **b[2]**, los valores respectivos en triplete *b*.

#### Restricciones
* 1 ≤ a[i] ≤ 100
* 1 ≤ b[i] ≤ 100

#### Entrada de muestra 0
```bash
    5 6 7

    3 6 10
```

#### Salida de muestra 0

```bash
    1 1
```

#### Explicación 0

En este ejemplo:

• a = (a[0], a[1], a[2]) = (5, 6, 7)

• b = (b[0], b[1], b[2]) = (3, 6, 10)

Ahora, comparemos cada puntuación individual:

• a[0] > b[0], por lo que Alicia recibe el punto.1

• a[1] = b[1], por lo que nadie recibe un punto.

• a[2] < b[2], por lo que Bob recibe el punto.1

La puntuación de comparación de Alice es , y la puntuación de comparación de Bob es . Por lo tanto, devolvemos la matriz 11[1, 1].
#### Entrada de muestra 1
```bash
    17 28 30

    99 16 8

```

#### Salida de muestra 1
```bash
    2 1
```

#### Explicación 1
Comparando el 0th Elementos 17 < 99 así que Bob recibe un punto.

Comparando el 1st y 2nd Elementos 28 > 16 y 30 > 8 por lo que Alicia recibe dos puntos.

La matriz de retorno es [2,1].

#### Codigo proporcionado en **HackerRank**

```typescript
    'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
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

function compareTriplets(a: number[], b: number[]): number[] {
    //Complete the 'compareTriplets' function
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b: number[] = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result: number[] = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
```