/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  let total = 0;
  let cuadrado = 0;
  for (let i = 0; i < numbers.length; i++) {
    cuadrado = Math.pow(numbers[i], 2);
    total = total + cuadrado;
  }
  return total;
}

squareSum([1, 2]); // 5;
squareSum([0, 3, 4, 5]); // 50;
squareSum([]); // 0;

//Respuesta Optimizada

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    //sum es el acumulador y n es el elemento que estamos iterando el 0 es el estado inicial.
    return n * n + sum;
  }, 0);
}
