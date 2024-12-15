'use strict';
function getStudentNames(students) {
  const resultArray = [];
  for (let i = 0; i < students.length; i++) {
    resultArray.push(students[i].name);
  }
  return resultArray;
}
