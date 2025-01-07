/* exported truncate */
function truncate(length: number, string: string): string {
  if (length > string.length) {
    return string + '...';
  }
  let emptyString = '';
  for (let i = 0; i < length; i++) {
    emptyString += string[i];
  }
  return emptyString + '...';
}
