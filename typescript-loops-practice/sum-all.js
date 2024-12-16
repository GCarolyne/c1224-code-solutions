'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let resultSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    resultSum += numbers[i];
  }
  return resultSum;
}
