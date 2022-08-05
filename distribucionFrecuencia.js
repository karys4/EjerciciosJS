/*
Distribución de Frecuencia 🚀
Crea una función que devuelva la distribución de frecuencias de una matriz. Esta función debe devolver un objeto, donde las claves son los elementos únicos y los valores son la frecuencia en la que ocurren esos elementos.

Ejemplos
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
Notas
Si se da una matríz vacía, devuelve un objeto vacío
El objeto debe estar en el mismo orden que en la matriz de entrada.
*/

function getFrequencies(arr) {
  let contador = arr.reduce(
    (acumulador, elementoArray) => (
      acumulador[elementoArray]
        ? (acumulador[elementoArray] += 1)
        : (acumulador[elementoArray] = 1),
      acumulador
    ),
    {}
  );
  console.log(contador);
}

getFrequencies(["A", "B", "A", "A", "A"]);
getFrequencies([1, 2, 3, 3, 2]);
getFrequencies([true, false, true, false, false]);
getFrequencies([]);
