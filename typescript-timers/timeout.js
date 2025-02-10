'use strict';
const $message = document.querySelector('.message');
if (!$message) throw new Error('the query for message failed. ');
setTimeout(() => {
  $message.textContent = 'Hello There';
}, 2000);
