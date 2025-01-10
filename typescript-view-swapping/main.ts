const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('the query tabcontainer failed.');

console.log('tabContainer', $tabContainer);

const $tab = document.querySelectorAll('.tab');

if (!$tab) throw new Error('the query tab failed.');
console.log('$tab', $tab);

const $view = document.querySelector('.view');
if (!$view) throw new Error('the query view failed');

console.log('$view', $view);

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    $tab.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  const dataView = $view.getAttribute('data-view');
  console.log('dataView', dataView);
});
