'use strict';
/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const prop in source) {
    let keep = true;
    for (const key of keys) {
      if (prop === key) {
        keep = false;
        break;
      }
    }
    if (keep) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
