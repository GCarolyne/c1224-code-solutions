'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const arr of array) {
    if (arr === 7) {
      return true;
    }
  }
  return false;
}
