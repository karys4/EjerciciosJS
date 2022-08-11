/*Fábrica de funciones 🚀
Crea una función que tome un "número base" como un argumento. 
Esta función debería devolver otra función que toma un nuevo argumento y devuelve la suma del "número base" y el nuevo argumento.

Consulta los ejemplos a continuación para tener una representación más clara del comportamiento esperado.

Ejemplos
// Llamar a makePlusFunction(5) devuelve una nueva función que toma una entrada,
// y devuelve el resultado al agregarle 5.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3

// Llamar a makePlusFunction(10) devuelve una nueva función que toma una entrada,
// y devuelve el resultado al agregarle 10.

 plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15 */

function makePlusFunction(baseNum) {
  function otraFuncion(otroNum) {
    return baseNum + otroNum;
  }
  return otraFuncion;
}

const plusTen = makePlusFunction(10);
const plusFive = makePlusFunction(5);

console.log(plusTen(0)); // 10

console.log(plusTen(188)); // 198

console.log(plusFive(plusTen(0))); // 15 */
