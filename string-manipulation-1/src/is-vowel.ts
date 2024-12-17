/* exported isVowel */
function isVowel(char: string): boolean {
  if (char[0] === 'a') {
    return true;
  } else if (char[0] === 'A') {
    return true;
  } else if (char[0] === 'e') {
    return true;
  } else if (char[0] === 'E') {
    return true;
  } else if (char[0] === 'i') {
    return true;
  } else if (char[0] === 'I') {
    return true;
  } else if (char[0] === 'o') {
    return true;
  } else if (char[0] === 'O') {
    return true;
  } else if (char[0] === 'u') {
    return true;
  } else if (char[0] === 'U') {
    return true;
  }
  return false;
}
