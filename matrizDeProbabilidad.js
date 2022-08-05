/*

¿Es una matriz de probabilidad? 🚀
En la teoría de la probabilidad, una matriz de probabilidad es una matriz tal que:

La matriz es una matriz cuadrada (mismo número de filas que de columnas).
Todas las entradas son probabilidades, es decir, números entre 0 y 1.
Todas las filas suman 1.
El siguiente es un ejemplo de una matriz de probabilidad:

[
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]
Toma en cuenta que aunque todas las filas suman 1, no hay restricciones en las columnas, que pueden o no sumar 1.

Escribe una función que determine si una matriz es de probabilidad o no.

Ejemplo
isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]) ➞ true

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3]
]) ➞ false

isProbMatrix([
  [2, -1],
  [-1, 2]
]) ➞ false

isProbMatrix([
  [0, 1],
  [1, 0]
]) ➞ true

isProbMatrix([
  [0.5, 0.4],
  [0.5, 0.6]
]) ➞ false

Notas
Dato curioso: para la mayoría de las matrices de probabilidad M (por ejemplo, si M no tiene ceros), 
las potencias de la matriz M^n convergen (a medida que n aumenta) en una matriz donde todas las filas son idénticas.

*/

function isProbMatrix(arr) {
  let filas = 0;
  let columnas = 0;
  let sumarFilas;

  //Identificar si es una matriz cuadrada
  for (var i = 0; i < arr.length; i++) {
    filas = arr.length;
    console.log("Total de Filas " + filas);
    columnas = arr[i].length;
    console.log("Total de Columnas " + columnas);
    if (filas != columnas) {
      console.log("No tiene el mismo número de filas y columnas");
    } else {
      for (var i = 0; i < arr.length; i++) {
        sumarFilas = 0;
        for (var j = 0; j < arr.length; j++) {
          sumarFilas = sumarFilas + arr[i][j];
        }
      }
      if (sumarFilas <= 1) {
        //console.log("La suma de la fila ", i + 1, " es ", sumarFilas, "\n");
        console.log(true);
      } else {
        //console.log("La suma de la fila ", i + 1, " es ", sumarFilas, "\n");
        console.log(false);
      }
    }
  }
}

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7],
]); // true

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
]); // false

isProbMatrix([
  [2, -1],
  [-1, 2],
]); // false

isProbMatrix([
  [0, 1],
  [1, 0],
]);

isProbMatrix([
  [0.5, 0.4],
  [0.5, 0.6],
]); // false
