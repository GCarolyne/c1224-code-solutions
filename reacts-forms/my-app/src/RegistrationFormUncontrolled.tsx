import { FormEvent } from 'react';
import './App.css';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData);
    console.log(data.username);
    console.log(data.password);
  }
  return (
    <>
      <form id="formInput" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}
