/* exported includesSeven */
function includesSeven(array: []): boolean {
  for (const arr of array) {
    if (arr === 7) {
      return true;
    }
  }
  return false;
}
