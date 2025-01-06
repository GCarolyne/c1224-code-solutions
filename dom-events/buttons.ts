const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton does not exist');

function handleClick(event: Event): undefined {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');

$hoverButton.addEventListener('mouseover', (event: Event) => {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
});

const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('$doubleClickButton does not exist');

$doubleClickButton.addEventListener('dblclick', (event: Event) => {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
});
