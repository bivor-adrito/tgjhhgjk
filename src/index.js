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

//FindIndex - find the index of the first item that matches.
