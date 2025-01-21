'use strict';
const $count = document.querySelector('.countdown-display');
if (!$count) throw new Error('the query for count failed.');
let counting = 4;
const countdown = setInterval(() => {
  if (counting > 0) {
    $count.textContent = counting.toString();
    counting--;
  } else {
    $count.textContent = '~Earth Beeeeloooowww Us~';
    clearInterval(countdown);
  }
}, 1000);
