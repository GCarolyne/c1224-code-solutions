'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const arrayValue = [];
  for (const arr of values) {
    if (arr !== null) {
      arrayValue.push(arr);
    }
  }
  return arrayValue;
}
