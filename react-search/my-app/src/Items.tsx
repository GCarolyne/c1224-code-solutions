import './SearchableList.css';

type Props = {
  filteredQuotes: string[];
  searchValue: string;
};

export function Items({ filteredQuotes, searchValue }: Props) {
  return (
    <div>
      <ul>
        {filteredQuotes.map((quote, index) => (
          <li
            key={index}
            className={`quote-item ${
              searchValue.length > 0 ? 'visible' : 'hidden'
            }`}>
            {quote}
          </li>
        ))}
      </ul>
    </div>
  );
}
