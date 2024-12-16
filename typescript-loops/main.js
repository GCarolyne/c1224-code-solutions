'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
getNumbersToTen();
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
function repeatWord(word, time) {
  let count = 1;
  let repeated = '';
  while (count < time) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log('logEachCharacter', str[i]);
  }
}
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i];
    const doubleResult = result * result;
    doubled.push(doubleResult);
  }
  return doubled;
}
function sumArray(numbers) {
  let sum = 0;
  for (const result of numbers) {
    sum += result;
  }
  return sum;
}
function reverseString(str) {
  let reversed = '';
  for (const result of str) {
    reversed = result + reversed;
  }
  return reversed;
}
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
}
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
