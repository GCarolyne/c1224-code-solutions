import { Images } from './Images';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import './Indicators.css';
import { Indicators } from './Indicators';
import { useState } from 'react';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <div className="row">
        <PrevButton
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
        />
        <Images image={images[currentImage]} />
        <NextButton
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        />
      </div>
      <div className="row">
        <Indicators
          count={images.length}
          selected={currentImage}
          onClick={(index) => setCurrentImage(index)}
        />
      </div>
    </>
  );
}
