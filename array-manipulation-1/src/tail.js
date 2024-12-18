'use strict';
/* exported tail */
function tail(array) {
  const newArrayResults = [];
  const arrayLength = array.length;
  for (let i = 1; i < arrayLength; i++) {
    newArrayResults.push(array[i]);
  }
  return newArrayResults;
}
