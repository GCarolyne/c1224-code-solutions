/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const wordAddSuffix = [];
  for (const word of words) {
    wordAddSuffix.push(word + suffix);
  }
  return wordAddSuffix;
}
