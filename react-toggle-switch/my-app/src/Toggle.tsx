import { useState } from 'react';
import './toggle.css';

export function Toggle() {
  const [isOn, setOn] = useState(true);
  let trackState = 'toggle-switch';
  let trackLabel = 'state-label';
  if (isOn === true) {
    trackState = 'toggle-switch is-on';
    trackLabel = 'On';
  } else if (isOn === false) {
    trackState = 'toggle-switch';
    trackLabel = 'Off';
  }
  function handleClick() {
    setOn(!isOn);
  }
  return (
    <div onClick={handleClick} className={trackState}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{trackLabel}</span>
    </div>
  );
}
