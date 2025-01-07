'use strict';
/* exported truncate */
function truncate(length, string) {
  if (length > string.length) {
    return string + '...';
  }
  let emptyString = '';
  for (let i = 0; i < length; i++) {
    emptyString += string[i];
  }
  return emptyString + '...';
}
