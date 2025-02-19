import { useState } from 'react';
import './SearchableList.css';
import { SearchBar } from './SearchBar';
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
      <SearchBar value={searchValue} onSearch={handleSearch} />
      <Items filteredQuotes={filteredQuotes} />
    </div>
  );
}
