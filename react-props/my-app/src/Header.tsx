type Props = {
  text: string;
};

export function Header(props: Props) {
  const value = props.text;
  return <h1>{value}</h1>;
}
