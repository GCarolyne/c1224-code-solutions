// import { useState } from 'react';
// import './Timewatch.css';
// import { FaPlay, FaPause } from 'react-icons/fa';

// export function Timewatch() {
//   const [count, setCount] = useState();
//   const [setId, setId] = useState();
//   const intervalId = setInterval(() => {
//     setCount((count) => count + 1);
//   }, 1000);

//   // function handleSet() {
//   //   const intervalId = setInterval(() => {
//   //     setCount((count) => count + 1);
//   //   }, 1000);
//   // }
//   return (
//     <div className="stopwatch">
//       <div className="watch-face">
//         <span> {count}</span>
//       </div>
//       <button type="submit" onClick={handleSet}>
//         <FaPlay size="2rem" className="start-stop" />
//       </button>
//       <button>
//         <FaPause size="2rem" className="pause" />
//       </button>
//     </div>
//   );
// }
