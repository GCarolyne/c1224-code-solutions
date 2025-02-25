/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 0*0 = O(1)
  const unique = []; // 0 * 0 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 1 * 0 = 1(n)
  ) {
    const word = words[i]; // 2 * n = 2(n)
    if (!seen[word]) {
      // 1 * n = 0(1n^2)
      seen[word] = true; // 1 * 0 = O(1)
      unique[unique.length] = word; // 2 * n = 1(n)
    }
  }
  return unique; //2* n = 2(n)
} // Big O Notation for uniqueLinear: 0(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 0 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n)
    i++ // 1 * n= O(n)
  ) {
    const word = words[i]; // 2 * n = O(2n)
    let isUnique = true; // 1 * 0 = O(1)
    for (
      let c = 0; // 1 * 1 = O(1)
      c < i; // 1 * 0 = O(1)
      c++ // 1 * n *n = O(n^2)
    ) {
      const comparing = words[c]; // 1* n = O(n)
      if (comparing === word) {
        // 1 * 1 = O(1)
        isUnique = false; // 1* 1 = O(1)
      }
    }
    if (isUnique) {
      // 1 * n = O(2n)
      unique[unique.length] = word; // 1 * n = O(n)
    }
  }
  return unique; // 2 * n = O(2n)
} // Big O Notation for uniqueQuadratic: O(2n)
