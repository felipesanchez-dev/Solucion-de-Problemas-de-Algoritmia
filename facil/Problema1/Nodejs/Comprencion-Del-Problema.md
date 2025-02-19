# Paso 1: Comprender el problema
El problema nos da dos listas de 3 números enteros cada una, representando la calificación de Alice y Bob en tres categorías. La idea es compararlos en cada categoría y otorgar puntos según las siguientes reglas:

Si el número de Alice en la posición i es mayor que el de Bob, Alice obtiene 1 punto.
Si el número de Bob en la posición i es mayor que el de Alice, Bob obtiene 1 punto.
Si los números son iguales, nadie obtiene puntos.
Al final, debemos retornar una lista con dos valores:

El primer valor representa la puntuación total de Alice.
El segundo valor representa la puntuación total de Bob.

#### Ejemplo:
```bash
    Entrada:
    a = [5, 6, 7]
    b = [3, 6, 10]

    Salida:
    [1, 1]
```
# Paso 2: Análisis de los datos de entrada y salida
* Se reciben dos arreglos de tamaño 3, por lo que podemos recorrerlos con un bucle for de 0 a 2.

* Debemos comparar los valores de cada índice y actualizar las variables de puntaje (scoreA para Alice y scoreB para Bob).

* Al final, retornamos un arreglo con los puntajes en el orden [scoreA, scoreB].

# Paso 3: Desglose del código paso a paso
```javascript
function compareTriplets(a, b) {
    let scoreA = 0;
    let scoreB = 0;
}
```
*  🔹Inicialización de variables:
Dos variables scoreA y scoreB que almacenarán las puntuaciones de Alice y Bob respectivamente. Ambas inician en 0.

```javascript
for (let i = 0; i < a.length; i++) {
}
```
* 🔹 Bucle for:
Se recorre el arreglo a y b desde el índice 0 hasta 2 (ya que a.length siempre es 3).

```javascript
if (a[i] > b[i]) {
    scoreA++;
} else if (a[i] < b[i]) {
    scoreB++;
}
```
* 🔹 Comparación de valores en la misma posición i:

Si a[i] > b[i], Alice gana un punto y se incrementa scoreA.
Si a[i] < b[i], Bob gana un punto y se incrementa scoreB.
Si a[i] === b[i], nadie gana puntos y no hacemos nada.

```javascript
return [scoreA, scoreB];
```
*  Retorno del resultado:
Se devuelve un arreglo con los valores [scoreA, scoreB], que representa el puntaje final.

## Ejemplo de ejecución paso a paso

### **Ejemplo 1:**
```javascript
// Datos de entrada
a = [5, 6, 7]
b = [3, 6, 10]
```

### **Iteración 1 (i = 0)**
- `a[0] = 5`, `b[0] = 3`
- Como `5 > 3`, Alice gana un punto.
- **scoreA = 1, scoreB = 0**

### **Iteración 2 (i = 1)**
- `a[1] = 6`, `b[1] = 6`
- Son iguales, nadie gana un punto.
- **scoreA = 1, scoreB = 0**

### **Iteración 3 (i = 2)**
- `a[2] = 7`, `b[2] = 10`
- Como `7 < 10`, Bob gana un punto.
- **scoreA = 1, scoreB = 1**

### **🔹 Resultado final:**
```javascript
[1, 1]
```

---

## **Complejidad del algoritmo**
- **Tiempo:** 🕒 `O(1)`, porque el tamaño del array es fijo (`3` elementos). Siempre ejecutamos `3` comparaciones.
- **Espacio:** 📦 `O(1)`, ya que solo usamos dos variables (`scoreA` y `scoreB`).

---

## **Resumen de la lógica**
1. Crear variables `scoreA` y `scoreB` para contar los puntos.
2. Recorrer ambos arreglos (`a` y `b`) con un bucle `for`.
3. Comparar los valores en cada índice `i` y actualizar las puntuaciones.
4. Retornar un arreglo con las puntuaciones finales `[scoreA, scoreB]`.

Este método es eficiente y sencillo, asegurando que la comparación se haga de manera directa en `O(1)`, ya que el tamaño de los arreglos es constante.
