/*
Secuencia numérica triangular 🚀
Esta secuencia numérica triangular se genera a partir de un patrón de puntos que forman un triángulo. Los primeros 5 números de la secuencia, o puntos, son:

1, 3, 6, 10, 15
Esto significa que el primer triángulo tiene solo un punto, el segundo tiene tres puntos, el tercero tiene 6 puntos y así sucesivamente.

Escribe una función que devuelva el número de puntos cuando se le da su correspondiente número de triángulo de la secuencia.

Ejemplos
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220
*/

function triangle(n) {
  let x = 1;
  for (let i = 1; i < n; i++) {
    x = x + i + 1;
  }
  console.log(x);
}

triangle(1); // 1
triangle(6); // 21
triangle(215); // 23220
