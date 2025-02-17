// import { useState } from 'react';
// import './SearchableList.css';
// type Props = {
//   quotes: string[];
//   onChange: () => void;
// };
// export function SearchableList({ quotes, onChange }: Props) {
//   const [value, setValue] = useState('');

//   function handleSearch(newValue: string) {
//     setValue(newValue);
//     const filtered = quotes.filter((quote) =>
//       quote.toLowerCase().includes(newValue.toLowerCase())
//     );
//     onChange();
//     console.log('filtered', filtered);
//   }

//   return (
//     <div>
//       <label>
//         Search
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => (e.target.value)}
//         />
//       </label>
//     </div>
//   );
// }
