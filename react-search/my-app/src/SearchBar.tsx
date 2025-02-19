type Props = {
  value: string;
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onSearch }: Props) {
  return (
    <div>
      <label>
        Search
        <input
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </div>
  );
}
