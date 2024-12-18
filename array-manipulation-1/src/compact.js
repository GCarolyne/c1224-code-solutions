'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (const para of array) {
    if (
      para !== false &&
      para !== null &&
      !Number.isNaN(para) &&
      para !== 0 &&
      para !== undefined &&
      para !== ''
    ) {
      newArray.push(para);
    }
  }
  return newArray;
}
