/* exported drop */
function drop(array: [], count: number): any[] {
  const newArray: any[] = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
