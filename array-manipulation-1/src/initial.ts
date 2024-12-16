/* exported initial */
function initial(array: any[]): any[] {
  const newArrayResults = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArrayResults.push(array[i]);
  }
  return newArrayResults;
}
