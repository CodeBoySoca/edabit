/**

Oddish vs. Evenish
URL: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
Challenge Description:

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd,
and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

*/


function oddishOrEvenish(num){
  //Passing castAndSplitNumber a number
  let result = castAndSplitNumber(num);
  // if no remainder the number is even
  if (result % 2 == 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

/*
    castAndSplitNumber(num: Number) -> Number
    Cast the number to a string so it can be sliced then iterate over the string
    and cast it back to a number so it can be added to the value of acc(the accumulator variable)
    return the value of the accumulator variable after the loop has been exhausted
*/
function castAndSplitNumber(num) {
  var acc = 0;
  castAndSplitNumber = String(num).slice();
  for (let i = 0; i < castAndSplitNumber.length; i++){
    acc += Number(castAndSplitNumber[i]);
  }
  return acc;
}

let result = oddishOrEvenish(41);
console.log(result);
