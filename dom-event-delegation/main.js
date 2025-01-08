'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('query task list ul failed.');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  if (eventTarget.tagName === 'BUTTON') {
    const taskElement = eventTarget.closest('.task-list-item');
    taskElement.remove();
  }
});
