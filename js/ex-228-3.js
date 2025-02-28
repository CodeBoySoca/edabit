/**

Function Times 3
URL: https://edabit.com/challenge/95YiRnBSnfzSQWAuu
Challenge Description:

Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result
of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied
together to get the final solution.

*/

//mmmm curried
function product(first, second){
   return function(third, fourth){
      return function(fifth, sixth){
        return (first * third * fifth) + (second * fourth * sixth);
      }
   }
}

const result = product(1,2)(1,1)(2,3); //each set of parentheses is a function call so three functions are needed
console.log(result);

//alternative syntax (version 2)
const shortHandPollyProduct = (a, b) => (c, d) => (e, f) => (a * c * e) + (b * d * f);
console.log(`One liner: ${shortHandPollyProduct(10,2)(5,0)(2,3)}`);
