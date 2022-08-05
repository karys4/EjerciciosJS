/*
Suma de cubos 🚀
Cree una función que tome un entero positivo n y devuelva la suma de todos los valores al cubo de 1 a n.

Por ejemplo, si n es 3:

sum_cubes(3) ➞ 36
1 ^ 3 + 2 ^ 3 + 3 ^ 3 = 36
Ejemplos
sum_cubes(7) ➞ 784

sum_cubes(8) ➞ 1296

sum_cubes(9) ➞ 2025
Notas
La entrada n es un entero positivo
*/
function sumCubes(n) {
  let sumatoria = 0;

  for (let i = 1; i <= n; i++) {
    sumatoria = sumatoria + Math.pow(i, 3);
  }
  console.log(sumatoria);
}

sumCubes(3);
sumCubes(7);
sumCubes(8);
sumCubes(9);
