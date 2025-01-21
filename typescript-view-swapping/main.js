'use strict';
const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('the query tabcontainer failed.');
const $tab = document.querySelectorAll('.tab');
if (!$tab) throw new Error('the query tab failed.');
const $view = document.querySelectorAll('.view');
if (!$view) throw new Error('the query view failed');
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    $tab.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  const dataView = $eventTarget.dataset.view;
  if ($eventTarget.matches('.tab')) {
    $view.forEach((view) => {
      if (view.getAttribute('data-view') === dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
});
