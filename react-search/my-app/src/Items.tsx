import './SearchableList.css';

type Props = {
  filteredQuotes: string[];
};

export function Items({ filteredQuotes }: Props) {
  return (
    <div>
      <ul>
        {filteredQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}
