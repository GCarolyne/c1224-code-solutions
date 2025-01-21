'use strict';
function handleFocus(event) {
  console.log('fired focus event:', focus);
  const eventTarget = event.target;
  console.log('eventTarget', eventTarget.name);
}
function handleBlur(event) {
  console.log('fired blur event:', 'blur');
  const eventTarget = event.target;
  console.log('eventTarget', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('eventTarget', eventTarget.name);
  console.log('eventTarget', eventTarget.value);
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('query failed for user name');
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('query failed for user email');
const $userText = document.querySelector('#user-message');
if (!$userText) throw new Error('query failed for user text');
$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userText.addEventListener('input', handleInput);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('input', handleInput);
$userText.addEventListener('focus', handleFocus);
$userText.addEventListener('blur', handleBlur);
