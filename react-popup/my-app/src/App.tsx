import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isWorking, setIsWorking] = useState(true);
  const positionRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        className={'style-but'}
        onClick={() => setIsWorking(!isWorking)}
        ref={positionRef}>
        Pop Up!
      </button>
      <p>This is some text</p>
      <Popup
        isOpen={!isWorking}
        positionTo={positionRef.current}
        onClose={() => {
          setIsWorking(false);
        }}>
        <ul className="style-li back-shade">
          <li>About</li>
          <li>Contact Us</li>
          <li>Main Menu</li>
          <li>Blog</li>
          <li>Store</li>
        </ul>
      </Popup>
      <p>This is some text</p>
    </>
  );
}

export default App;
