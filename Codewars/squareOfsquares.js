/* 

Task:
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

var isSquare = function (n) {
  if (Math.sqrt(n) >= 0 && n % Math.sqrt(n) == 0) {
    console.log(true);
  } else if (n === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isSquare(-1); //false,
isSquare(0); // true
isSquare(3); // false
isSquare(4); // true
isSquare(25); // true
isSquare(26); //false

//Respuesta Optimizada
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

/*Explicación:
So if you take the square root of a perfect square, you will always end up with an integer. Its remainder when divided by 1 will always be 0.

Conversely, if you take the square root of a non-perfect square, you will always end up with a float. Its remainder when divided by 1 on a computer
 using binary floating point format will never be 0 because the computer cannot perform floating point division accurately.
*/
