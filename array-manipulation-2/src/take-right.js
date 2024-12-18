'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  if (count > array.length) {
    return array;
  }
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
