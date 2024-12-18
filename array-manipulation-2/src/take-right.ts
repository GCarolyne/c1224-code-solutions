/* exported takeRight */
function takeRight(array: any[], count: number): unknown {
  const newArray = [];
  if (count > array.length) {
    return [...array];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[count]);
  }
  return newArray;
}
