/* exported includes */
function includes(array: any[], value: any[]): boolean {
  for (const arr of array) {
    if (value === arr) {
      return true;
    }
  }
  return false;
}
