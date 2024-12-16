'use strict';
/* exported capitalize */
function capitalize(word) {
  let reWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      reWord += word[i].toUpperCase();
    } else {
      reWord += word[i].toLowerCase();
    }
  }
  return reWord;
}
