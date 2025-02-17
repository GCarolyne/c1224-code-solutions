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
            onChange={(e) => setPassword(e.target.value)}
            value={username}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}
