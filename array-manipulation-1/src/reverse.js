'use strict';
/* exported reverse */
function reverse(array) {
  const reverseResultArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseResultArray.push(array[i]);
  }
  return reverseResultArray;
}
