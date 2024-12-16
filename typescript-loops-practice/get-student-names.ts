/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const resultArray: string[] = [];
  for (let i = 0; i < students.length; i++) {
    resultArray.push(students[i].name);
  }
  return resultArray;
}
