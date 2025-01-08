const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('query open modal failed');
if (!$dismissModal) throw new Error('query dismiss modal failed');
if (!$dialog) throw new Error('query dialog failed');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
