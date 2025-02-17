type Props = {
  filtered: string[];
};

export function Items({ filtered }: Props) {
  return (
    <div>
      <ul>
        {/* {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))} */}
        {filtered}
      </ul>
    </div>
  );
}
