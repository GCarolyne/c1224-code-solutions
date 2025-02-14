import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [value, setValue] = useState('');
  let message = '';
  if (value === '') {
    message = 'A password is required.';
  } else if (value.length < 8) message = 'Your password is too short. ';

  return (
    <div className="flex w-full m-12">
      <label>
        <span className="text-gray-700">Password</span>
        <div className="relative w-80">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded"
            value={value}
          />

          {message.length === 0 ? (
            <FaCheck color="green" />
          ) : (
            <FaTimes color="red" />
          )}
          <div className="absolute inset-y-0 right-2 flex items-center"></div>
        </div>
        <div className="p-1 text-red-700">{message}</div>
      </label>
    </div>
  );
}
