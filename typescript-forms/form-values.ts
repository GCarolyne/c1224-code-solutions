interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
}

interface FormVal {
  name: string;
  email: string;
  message: string;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('query for contact form failed.');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  console.log('$formElements', $formElements);
  const FormValues: FormVal = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('value', FormValues);
  $contactForm.reset();
});
