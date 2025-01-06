'use strict';
/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
