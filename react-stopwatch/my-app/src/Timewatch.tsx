import { useState } from 'react';
import './Timewatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Timewatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const running = intervalId !== undefined;

  function handlePlay() {
    const id = setInterval(() => setCount((count) => count + 1), 1000);
    setIntervalId(id);
  }
  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }
  function clearReset() {
    if (intervalId) {
      return running;
    }
    setCount(0);
  }

  return (
    <div className="stopwatch">
      <div className="watch-face" onClick={clearReset}>
        <span> {count}</span>
      </div>
      {!running ? (
        <button
          type="button"
          onClick={() => {
            handlePlay();
            if (running) setCount(0);
          }}>
          <FaPlay size="2rem" className="start-stop" />
        </button>
      ) : (
        <button type="submit" onClick={handlePause}>
          <FaPause size="2rem" className="pause" />
        </button>
      )}
    </div>
  );
}
