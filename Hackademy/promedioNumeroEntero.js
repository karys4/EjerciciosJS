/*
¿Es el promedio de todos los elementos un número entero? 🚀
Crea una función que tome un arreglo como un argumento y devuelva true o false 
dependiendo si el promedio de todos los elementos del arreglo es un número entero o no.

Ejemplos
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false

*/

function isAvgWhole(arr) {
  let sumaArreglo = 0;
  let promedio = 0;

  for (let i = 0; i < arr.length; i++) {
    sumaArreglo += arr[i];
    promedio = sumaArreglo / arr.length;
  }
  Number.isInteger(promedio) ? console.log(true) : console.log(false);
}

isAvgWhole([1, 3]); // true

isAvgWhole([1, 2, 3, 4]); // false

isAvgWhole([1, 5, 6]); // true

isAvgWhole([1, 1, 1]); // true

isAvgWhole([9, 2, 2, 5]); // false
