interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  const odds: number[] = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }

  const evens: number[] = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }

  const range: number[] = [];
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
