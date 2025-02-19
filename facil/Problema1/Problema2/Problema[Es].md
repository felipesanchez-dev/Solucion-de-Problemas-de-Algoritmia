# **Suma de matriz simple**

## Nivel de dificultad: 🟢 Fácil

### [📌 Enunciado del Problema](https://www.hackerrank.com/challenges/simple-array-sum/problem)
---
Dada una matriz de números enteros, encuentre la suma de sus elementos. <br>
**Por ejemplo, si la matriz** `ar = [1,2,3], 1 + 2 + 3 = 6`, por lo que regresa *6*
#### Descripción de la función
Completa el archivo ***simpleArraySum function***  con los siguientes **parámetros**: <br>
* `ar[n]`: una matriz de enteros 

**Devuelve**
* `int`: La suma de los numeros

**Formato de entrada**
La primera línea contiene un número entero, , que denota el tamaño de la matriz.
La segunda línea contiene enteros separados por espacios que representan los elementos de la matriz. `nn`

**Restricciones**

`0 < n, ar[i] <= 100`

**Entrada de muestra**

```plaintext
    STDIN           Function
    -----           --------
    6               ar[] size n = 6
    1 2 3 4 10 11   ar = [1, 2, 3, 4, 10, 11]
```

**Salida de muestra**

```plaintext
    31
```
**Explicación**
Imprime la suma de los elementos de la matriz:

`1 + 2 + 3 + 4 + 10 + 11 = 31`