const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('query task list ul failed.');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  if (eventTarget.tagName === 'BUTTON') {
    const taskElement = eventTarget.closest('.task-list-item') as HTMLElement;
    taskElement.remove();
  }
});
