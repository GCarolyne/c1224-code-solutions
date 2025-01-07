let storedClicks = 0;

const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('hotButton query failed');

const $clickCount = document.querySelector('.click-count');
if (!$clickCount) throw new Error('clickCount query failed');

function handleClick(): undefined {
  storedClicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `${storedClicks}`;
  if (storedClicks < 4) {
    $hotButton.className =
      'hot-button cold hot-button hot-button:active hot-button:focus';
  } else if (storedClicks < 7) {
    $hotButton.className =
      'hot-button cool hot-button hot-button:active hot-button:focus';
  } else if (storedClicks < 10) {
    $hotButton.className =
      'hot-button tepid hot-button hot-button:active hot-button:focus';
  } else if (storedClicks < 13) {
    $hotButton.className =
      'hot-button warm hot-button hot-button:active hot-button:focus';
  } else if (storedClicks < 16) {
    $hotButton.className =
      'hot-button hot hot-button hot-button:active hot-button:focus';
  } else {
    $hotButton.className =
      'hot-button nuclear hot-button hot-button:active hot-button:focus';
  }
}
$hotButton.addEventListener('click', handleClick);
