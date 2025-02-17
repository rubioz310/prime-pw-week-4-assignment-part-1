console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jose'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return `${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`;
}
console.log(addNumbers(23, 67));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  let result=firstNumber*secondNumber*thirdNumber;
  return `The result is ${result}`;
}
console.log (multiplyThree(3,6,9));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log(isPositive(6));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return `Last element in the array is: ${array[array.length-1]}`;
}
let newArray=[];
console.log(getLast(newArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for(let element of array){
    if (element==value) {
      return true;
    }
  }
  return false;
}

let numberArray=[4,56,12,39]
console.log(find(12, numberArray));
console.log(find(3, numberArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.indexOf(letter)==0){
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for (let num of array){
    sum+=num;
  }
  return sum;
}
let sumArray = [1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(`The sum of the array is: ${sumAll(sumArray)}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveNumbers(array){
  let positiveArray = [];
  for (let num of array){
    if (num > 0){
      positiveArray.push(num);
    }
  }
  return positiveArray;
}

let testArray = [3, -1, 46, -189, 0, 27];
console.log(`List of positive numbers: ${positiveNumbers(testArray)}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Create a function that takes an array arr of numbers and
// moves all zeros to the end, preserving the order of the other elements.
function moveZeros( array ){
  let correctArray = [];
  let zerosCount = 0;
  for (let element of array){
    if( element === 0){
      zerosCount++;
    } else {
      correctArray.push(element);
    }
  }
  for (let i = 0; i < zerosCount; i++){
    correctArray.push(0);
  }
  return correctArray;
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
