/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
