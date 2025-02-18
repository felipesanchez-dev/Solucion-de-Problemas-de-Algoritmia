# **Comparación de Tripletas**

## Nivel de dificultad: 🟢 Fácil

### [📌 Enunciado del Problema](https://www.hackerrank.com/challenges/compare-the-triplets/problem)
---

Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: **claridad del problema, originalidad y dificultad**.

La calificación para el desafío de **Alicia** es el triplete:
> `a = (a[0], a[1], a[2])`

La calificación para el desafío de **Bob** es el triplete:
> `b = (b[0], b[1], b[2])`

### 📊 Criterios de comparación:
- **Si** `a[i] > b[i]` → **Alice gana 1 punto**
- **Si** `a[i] < b[i]` → **Bob gana 1 punto**
- **Si** `a[i] = b[i]` → **Nadie gana puntos**

---

## 📌 Ejemplo

**Entrada:**  
```plaintext
1 2 3
3 2 1
```

**Proceso:**
- `a[0] (1) < b[0] (3) →` Bob gana 1 punto
- `a[1] (2) = b[1] (2) →` Ninguno gana puntos
- `a[2] (3) > b[2] (1) →` Alice gana 1 punto

**Salida:**  
```plaintext
1 1
```

---

## ✍️ Descripción de la función

Completa la función `compareTriplets` con los siguientes parámetros:

🔹 **Entrada:**
- `int a[3]` → Lista con los puntajes de Alice
- `int b[3]` → Lista con los puntajes de Bob

🔹 **Salida:**
- `int[2]` → Lista donde el primer elemento es la puntuación de Alice y el segundo la de Bob

---

## 📌 Formato de entrada

- La **primera línea** contiene 3 enteros separados por espacios → `a[0] a[1] a[2]`
- La **segunda línea** contiene 3 enteros separados por espacios → `b[0] b[1] b[2]`

🔹 **Restricciones:**
- `1 ≤ a[i] ≤ 100`
- `1 ≤ b[i] ≤ 100`

---

## 📌 Casos de prueba

### ✅ **Ejemplo 1**
🔹 **Entrada:**
```plaintext
5 6 7
3 6 10
```
🔹 **Proceso:**
- `a[0] (5) > b[0] (3) →` Alice gana 1 punto
- `a[1] (6) = b[1] (6) →` Ninguno gana puntos
- `a[2] (7) < b[2] (10) →` Bob gana 1 punto

🔹 **Salida:**
```plaintext
1 1
```

---

### ✅ **Ejemplo 2**
🔹 **Entrada:**
```plaintext
17 28 30
99 16 8
```
🔹 **Proceso:**
- `a[0] (17) < b[0] (99) →` Bob gana 1 punto
- `a[1] (28) > b[1] (16) →` Alice gana 1 punto
- `a[2] (30) > b[2] (8) →` Alice gana 1 punto

🔹 **Salida:**
```plaintext
2 1
```

---

📢 **Nota:** La salida siempre muestra `[Puntaje_Alice, Puntaje_Bob]`.
