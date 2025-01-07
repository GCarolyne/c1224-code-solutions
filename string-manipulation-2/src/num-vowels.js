'use strict';
/* exported numVowels */
function numVowels(string) {
  let add = 0;
  for (let i = 0; i < string.length; i++) {
    const vowels = string[i].toLowerCase();
    if (
      vowels === 'a' ||
      vowels === 'e' ||
      vowels === 'i' ||
      vowels === 'o' ||
      vowels === 'u'
    ) {
      add++;
    }
  }
  return add;
}
