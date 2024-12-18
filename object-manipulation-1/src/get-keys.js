'use strict';
/* exported getKeys */
function getKeys(object) {
  const keysArray = [];
  for (const prop in object) {
    keysArray.push(prop);
  }
  return keysArray;
}
