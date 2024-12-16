'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const wordAddSuffix = [];
  for (const word of words) {
    wordAddSuffix.push(word + suffix);
  }
  return wordAddSuffix;
}
