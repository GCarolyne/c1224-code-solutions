import './Image.css';
import { useState } from 'react';
type Props = {
  src: string[];
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((priIndex) => (priIndex + 1) % src.length);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={handleClick}
          className="image-fill"
          src={src[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
