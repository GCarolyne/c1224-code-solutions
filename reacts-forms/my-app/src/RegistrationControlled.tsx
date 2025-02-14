import { useState, FormEvent } from 'react';
export function RegistrationFormControlled() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(password);
    console.log(username);
  }
  return (
    <>
      <form id="formInput" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}
