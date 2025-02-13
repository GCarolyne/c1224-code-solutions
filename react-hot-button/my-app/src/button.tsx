import { useState } from 'react';
import './button.css';

export function Button() {
  const [index, setIndex] = useState(0);
  let color = 'purple';

  if (index <= 3) {
    color = 'purple';
  } else if (index <= 6) {
    color = 'lightPurple';
  } else if (index <= 9) {
    color = 'red';
  } else if (index <= 12) {
    color = 'orange';
  } else if (index <= 15) {
    color = 'yellow';
  } else {
    color = 'purple';
  }
  const handleClick = () => {
    setIndex(() => index + 1);
  };

  return (
    <div>
      <button className={color} onClick={handleClick}>
        <p>{index}</p>
      </button>
    </div>
  );
}
