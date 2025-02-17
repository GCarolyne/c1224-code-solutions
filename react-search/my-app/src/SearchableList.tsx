import { useState } from 'react';
import './SearchableList.css';

import { Items } from './Items';
type Props = {
  quotes: string[];
};
export function SearchableList({ quotes }: Props) {
  const [searchValue, setValue] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  function handleSearch(newValue: string) {
    setValue(newValue);
    const filtered = quotes.filter((quote) =>
      quote.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredQuotes(filtered);
  }

  return (
    <div>
      <label>
        Search
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </label>
      <Items filteredQuotes={filteredQuotes} searchValue={searchValue} />
    </div>
  );
}
