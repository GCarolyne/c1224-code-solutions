'use strict';
function getRangeReport(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  const odds = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  const evens = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  const average = (start + end) / 2;
  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}
getRangeReport(22, 66);
