'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('query task list ul failed.');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('eventTarget', eventTarget);
  console.log('eventTarget.tagName', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const taskElement = eventTarget.closest('.task-list-item');
    console.log('taskElement', taskElement);
    taskElement.remove();
  }
});
