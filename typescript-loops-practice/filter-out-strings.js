'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredOut = [];
  for (const para of values) {
    if (typeof para !== 'string') {
      filteredOut.push(para);
    }
  }
  return filteredOut;
}
