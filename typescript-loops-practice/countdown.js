'use strict';
/* exported countdown */
function countdown(num) {
  const resultArray = [];
  for (let i = num; i >= 0; i--) {
    resultArray.push(i);
  }
  return resultArray;
}
