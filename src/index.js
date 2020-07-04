var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function triple(x) {
  return (x = x * 2);
}
var newNumbers = numbers.map(triple);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

function divByThree(x) {
  if (x % 3 === 0) {
    return x;
  }
}

var filteredNumbers = numbers.filter(divByThree);
console.log("filtered numbers: " + filteredNumbers);
//Reduce - Accumulate a value by doing something to each item in an array.
const sumR = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log("reduce numbers array to its summation: " + sumR);
//Find - find the first item that matches from an array.
function lookFor(x) {
  if (x > 10) {
    return x;
  }
}

const found = numbers.find(lookFor);
console.log("Found numbers: " + found);

//FindIndex - find the index of the first item that matches.
function lookForIndex(x) {
  if (x > 1) {
    return x;
  }
}

const foundIndex = numbers.findIndex(lookForIndex);
console.log("Found numbers: " + foundIndex);
