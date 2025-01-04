'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let result = '';
  let resultSpace = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += ' ';
      resultSpace = true;
      continue;
    }
    if (resultSpace) {
      result += string[i].toUpperCase();
      resultSpace = false;
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
