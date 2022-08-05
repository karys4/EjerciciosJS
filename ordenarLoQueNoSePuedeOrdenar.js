/*
Ordenar lo que no se puede ordenar 🚀
En este reto, se te dará un arreglo similar al siguiente:

[[3], 4, [2], [5], 1, 6]
En palabras, los elementos del arreglo son ya sea un número entero o un arreglo que contiene un solo número entero_. Los humanos podemos ver claramente que este arreglo se puede ordenar razonablemente de acuerdo con "el contenido de los elementos" como:

[1, [2], [3], 4, [5], 6]
Cree una función que, dado un arreglo similar al anterior, ordenalo de acuerdo con el "contenido de los elementos".

Ejemplos
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
Notas
Para reiterar, los elementos del arreglo serán números enteros o arreglos con un solo número entero.
*/

function sortIt(arr) {
  const arregloOrdenado = arr.sort();
  console.log(arregloOrdenado);
}

sortIt([4, 1, 3]); // [1, 3, 4]

sortIt([[4], [1], [3]]); // [[1], [3], [4]]

sortIt([4, [1], 3]); // [[1], 3, 4]

sortIt([[4], 1, [3]]); // [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]); // [1, [2], [3], 4, [5], 6]
