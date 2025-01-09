const $circle = document.querySelector('.circle');
if (!$circle) throw new Error('query for circle failed');

const $container = document.querySelector('body');
if (!$container) throw new Error('query for container failed');

$circle.addEventListener('click', () => {
  $container.classList.toggle('black-backdrop');
  $circle.classList.toggle('circle-dark');
});
