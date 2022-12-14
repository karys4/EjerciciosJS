/*F谩brica de funciones 馃殌
Crea una funci贸n que tome un "n煤mero base" como un argumento. 
Esta funci贸n deber铆a devolver otra funci贸n que toma un nuevo argumento y devuelve la suma del "n煤mero base" y el nuevo argumento.

Consulta los ejemplos a continuaci贸n para tener una representaci贸n m谩s clara del comportamiento esperado.

Ejemplos
// Llamar a makePlusFunction(5) devuelve una nueva funci贸n que toma una entrada,
// y devuelve el resultado al agregarle 5.

const plusFive = makePlusFunction(5)

plusFive(2) 鉃? 7

plusFive(-8) 鉃? -3

// Llamar a makePlusFunction(10) devuelve una nueva funci贸n que toma una entrada,
// y devuelve el resultado al agregarle 10.

 plusTen = makePlusFunction(10)

plusTen(0) 鉃? 10

plusTen(188) 鉃? 198

plusFive(plusTen(0)) 鉃? 15 */

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
