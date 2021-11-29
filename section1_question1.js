function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// input
let bucket = factorial(100);
console.log(bucket);

//remove the unnecessary characters from array
let stringArray = bucket.toString().split("");
console.log(stringArray);
console.log(stringArray.indexOf("e"));

let sliceAt = stringArray.indexOf("e");
let slicedArray = stringArray.slice(0, sliceAt);

let numbersOnly = (val) => {
  if (val !== ".") {
    return val;
  }
};

let filteredStringArray = slicedArray.filter(numbersOnly);
console.log(filteredStringArray);

let result = filteredStringArray.reduce(
  (previousValue, currentValue) =>
    parseInt(previousValue) + parseInt(currentValue)
);

//output
console.log(`The sum of the digits in 100! is: ${result}`);
