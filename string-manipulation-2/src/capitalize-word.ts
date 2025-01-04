/* exported capitalizeWord */
function capitalizeWord(word: string): unknown {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  let wholeWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      wholeWord += word[i].toUpperCase();
    } else {
      wholeWord += word[i].toLowerCase();
    }
  }
  return wholeWord;
}
