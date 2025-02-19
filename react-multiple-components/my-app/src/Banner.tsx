type Props = {
  item: string;
};

export function Banner({ item }: Props) {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}
