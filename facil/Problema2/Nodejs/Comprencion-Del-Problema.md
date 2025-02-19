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

# 3️⃣ Función readLine()
Esta función es una herramienta para leer la siguiente línea de la entrada, facilitando el procesamiento secuencial.

```javascript
function readLine() {
    return inputString[currentLine++];
}
```
<br>

**🔍 ¿Qué hace?**

Cada vez que llamamos a `readLine()` , se devuelve la siguiente línea de la entrada, incrementando el contador currentLine.