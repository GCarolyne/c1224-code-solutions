'use strict';
let storedClicks = 0;
const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('hotButton query failed');
const $clickCount = document.querySelector('.click-count');
if (!$clickCount) throw new Error('clickCount query failed');
function handleClick() {
  storedClicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `${storedClicks}`;
  if (storedClicks < 4) {
    $hotButton.className = 'hot-button cold ';
  } else if (storedClicks < 7) {
    $hotButton.className = 'hot-button cool ';
  } else if (storedClicks < 10) {
    $hotButton.className = 'hot-button tepid ';
  } else if (storedClicks < 13) {
    $hotButton.className = 'hot-button warm ';
  } else if (storedClicks < 16) {
    $hotButton.className = 'hot-button hot ';
  } else {
    $hotButton.className = 'hot-button nuclear ';
  }
}
$hotButton.addEventListener('click', handleClick);
