type Props = {
  value: string[];
};

export function SearchBar({ value }: Props) {
  const filteredQuotes = value.filter((quote) =>
    quote.toLowerCase().includes(quote.toLowerCase())
  );

  return (
    <div>
      <ul>{filteredQuotes}</ul>
    </div>
  );
}
