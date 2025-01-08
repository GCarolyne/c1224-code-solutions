const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('query task list ul failed.');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget', eventTarget);
  console.log('eventTarget.tagName', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const taskElement = eventTarget.closest('.task-list-item') as HTMLElement;
    console.log('taskElement', taskElement);
    taskElement.remove();
  }
});
