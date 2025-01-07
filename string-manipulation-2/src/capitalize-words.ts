/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let result: string = '';
  let resultSpace = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += ' ';
      resultSpace = true;
      continue;
    }
    if (resultSpace) {
      result += string[i].toUpperCase();
      resultSpace = false;
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
