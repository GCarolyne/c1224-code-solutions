'use strict';
/* exported includes */
function includes(array, value) {
  for (const arr of array) {
    if (value === arr) {
      return true;
    }
  }
  return false;
}
