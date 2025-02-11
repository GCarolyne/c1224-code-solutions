type Props = {
  text: string;
};

export function Description(des: Props) {
  return <p>{des.text}</p>;
}
