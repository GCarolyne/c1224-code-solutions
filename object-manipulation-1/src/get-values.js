'use strict';
/* exported getValues */
function getValues(object) {
  const getVal = [];
  for (const prop in object) {
    getVal.push(object[prop]);
  }
  return getVal;
}
