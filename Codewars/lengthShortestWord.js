/*

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  const arrLength = s.split(" ").map((word) => word.length);
  return Math.min(...arrLength);
}

findShort("bitcoin take over the world maybe who knows perhaps"); //3
findShort("turns out random test cases are easier than writing out basic ones"); //3
findShort("Let's travel abroad shall we"); //2

//split() splits a string into an array of substrings, and returns an array.
//The Array.map() method creates a new array from the results of calling a function for every element.
