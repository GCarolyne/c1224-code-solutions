type Props = {
  items: string[];
};

export function Banner({ items }: Props) {
  const x = [];
  for (let i = 0; i < items.length; i++) {
    x.push(items[i]);
  }
  return (
    <div>
      <ul>{x}</ul>
    </div>
  );
}
