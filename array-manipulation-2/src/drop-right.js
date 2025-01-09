'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array[count]) {
      newArray.push(array[i]);
    }
    console.log('array', array);
    console.log('array[count]', array[count]);
  }
  console.log('newArray', newArray);
  return newArray;
}
