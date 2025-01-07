'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  for (const prop in source) {
    const val = source[prop];
    newObj[val] = prop;
  }
  return newObj;
}
