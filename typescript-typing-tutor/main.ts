const $span = document.querySelectorAll('span');
if (!$span) throw new Error('the query for span failed');

let count = 0;

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key;
  console.log('pressedKey', pressedKey);
  if (pressedKey === $span[count].textContent) {
    $span[count].classList.add('green');
    $span[count].classList.remove('under');
    $span[count + 1].classList.add('under');
    count++;
  } else if (pressedKey !== $span[count].textContent) {
    $span[count].classList.add('red');
  }
});
