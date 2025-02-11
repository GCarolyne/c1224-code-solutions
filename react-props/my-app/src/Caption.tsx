type Props = {
  text: string;
};

export function Caption(h3: Props) {
  return <h3>{h3.text}</h3>;
}
