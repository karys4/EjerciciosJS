/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321

*/

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

descendingOrder(0); //0
descendingOrder(1); // 1
descendingOrder(111); //111
descendingOrder(15); //51
descendingOrder(1021); //2110
descendingOrder(123456789); //987654321

/*  
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
*/

/*
HIGH LEVEL SUMMARY

To return numbers in descending order.

Convert number to string, and then string to an array, because we need to use methods of array.

String(n) to convert our input into a string, so that we can use split.
.split('') so that we can convert our string into an array with individual characters
.sort() to rearrange our string characters from lowest to highest.
.reverse() to flip our arrangement to highest to lowest.
.join('') to convert our array back into a string, so that we can use parseInt()
parseInt() on the outside will convert our joined string into a number

*/
