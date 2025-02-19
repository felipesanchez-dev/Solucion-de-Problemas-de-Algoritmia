# 1️⃣ Comprender el problema
A continuación te presento una explicación muy completa, paso a paso, de cómo se llegó a la lógica de la solución

El objetivo es sumar todos los elementos de un array de números enteros. Se recibe la entrada en dos partes:

* La primera línea indica el tamaño del array (aunque en la solución esto se usa solo para cumplir con el formato de entrada).

* La segunda línea contiene los números separados por espacios.

**Ejemplo de entrada:**
```plaintext
    6
    1 2 3 4 10 11
```
**Salida esperada:**
```plaintext
    31
```
**📝 Notas:**

* El tamaño (6) se usa para saber cuántos elementos hay, pero la suma se hace directamente sobre el array de números.

* Es fundamental transformar la cadena de números en un array de enteros antes de sumarlos.

<br>

# 2️⃣ Manejo de la Entrada de Datos
Para entornos como HackerRank se utiliza la entrada estándar `(stdin)` y se escribe la salida a un archivo `(o stdout)` usando el módulo `fs` de Node.js.

**Código utilizado para leer la entrada:**
```javascript
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
```
**🔍 ¿Qué hace este bloque?**

*  `process.stdin.resume()` : Inicia la recepción de datos desde la entrada estándar.

*  `setEncoding('utf-8')` :  Asegura que los datos se lean en UTF-8.

* **Acumulación de datos:** Se almacenan en  `inputString` a medida que se reciben.

* Evento   `'end'` : Una vez que se termina de enviar la entrada, se divide inputString en líneas ( con  `split('\n') ` ) y se llama a la función  `main() `

<br>

**🚀 Mejora para ejecución local:**

En un entorno local podrías reemplazar esta parte con datos definidos manualmente o usar `fs.readFileSync` para leer de un archivo, lo que facilita la prueba sin depender de la entrada por consola.

<br>

# 3️⃣ Función `readLine()`
Esta función es una herramienta para leer la siguiente línea de la entrada, facilitando el procesamiento secuencial.

```javascript
function readLine() {
    return inputString[currentLine++];
}
```
<br>

**🔍 ¿Qué hace?**

Cada vez que llamamos a `readLine()` , se devuelve la siguiente línea de la entrada, incrementando el contador currentLine.

<br>

# 4️⃣ Función `simpleArraySum(ar)`

Esta es la función principal que calcula la suma de los elementos del array.

Versión optimizada (usando reduce()):

```javascript
function simpleArraySum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}
```
**🔍 Explicación:**

* **reduce()** : Es un método que recorre el `array` y acumula un resultado.

* **sum:** Es el acumulador que empieza en 0 (el valor inicial).

* **num:** Representa cada elemento del array.

* Cada iteración, se suma el valor de num al acumulador sum.

* Alternativa no optimizada (usando un bucle `for` ):
```javascript
function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
```
**🤔 Consideraciones:**

Ambas versiones tienen la misma complejidad temporal O(n), pero la versión con `reduce()` es más concisa y se aprovechan las funciones nativas de JavaScript, lo que puede mejorar la legibilidad y, en algunos casos, el rendimiento.

<br>

# 5️⃣ Función `main()`
La función `main()` es la que orquesta la lectura de la entrada, el procesamiento de los datos y la escritura del resultado.

**Código original:**
```javascript
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');
    ws.end();
}
```