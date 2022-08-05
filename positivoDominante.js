/*
Positivo Dominante:
Un arreglo es dominante positivo si contiene estrictamente más valores positivos únicos que valores negativos únicos. Escriba una función que devuelva true si un arreglo es dominante positivo.### Ejemplos

Solo hay 1 valor positivo único (1).
Hay 2 valores negativos únicos (-3, -4).
isPositiveDominant([5, 99, 832, -3, -4]) ➞ true 
isPositiveDominant([5, 0]) ➞ true
isPositiveDominant([0, -4, -1]) ➞ false```
### Notas
`0` no cuenta como un valor positivo ni negativo.

*/

function isPositiveDominant(a) {
  let positivo = 0;
  let negativo = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] > 0 ? (positivo += 1) : (negativo += 1);
  }
  positivo > 0 ? console.log(true) : console.log(false);
}

isPositiveDominant([5, 99, 832, -3, -4]); //true
isPositiveDominant([5, 0]); //true
isPositiveDominant([0, -4, -1]); //false
