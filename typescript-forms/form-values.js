'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('query for contact form failed.');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  console.log('$formElements', $formElements);
  const FormValues = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('value', FormValues);
  $contactForm.reset();
});
