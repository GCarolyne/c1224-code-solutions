import { useState } from 'react';

type Props = {
  text: string[];
};
export function Description({ text }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((priIndex) => (priIndex + 1) % text.length);
  }
  return <p onClick={handleClick}>{text[index]}</p>;
}
