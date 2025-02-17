type Props = {
  item: string;
};

export function Banner({ item }: Props) {
  const x = [];
  for (let i = 0; i < item.length; i++) {
    x.push(item[i]);
  }
  return (
    <div>
      <h1>{x}</h1>
    </div>
  );
}
