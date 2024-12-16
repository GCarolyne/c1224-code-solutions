/* exported reverse */
function reverse(array: any[]): any[] {
  const reverseResultArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseResultArray.push(array[i]);
  }
  return reverseResultArray;
}
