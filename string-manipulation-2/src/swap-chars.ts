/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}
