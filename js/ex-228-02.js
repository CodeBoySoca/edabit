/**

Frequency Distribution
URL: https://edabit.com/challenge/uScx6aGXmNu27NYWz
Challenge Description:

Create a function that returns the frequency distribution of an array. This function should
return an object, where the keys are the unique elements and the values are the frequency in
which those elements occur.

*/

function getFrequencies(arr){
    resultObj = {};
    arr.map((x) => {
      if(resultObj.hasOwnProperty(x)){
          resultObj[x] += 1;
      } else {
          resultObj[x] = 1;
      }
    })
  return resultObj;
}

const freq = getFrequencies(["A", "B", "A", "A", "A"])
console.log(freq);
