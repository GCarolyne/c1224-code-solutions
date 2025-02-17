import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton
        onClick={() =>
          setCurrentIndex(
            (currentIndex) => (currentIndex - 1 + items.length) % items.length
          )
        }
      />
      <Indicators
        index={currentIndex}
        count={items.length}
        onClick={handleIndicatorClick}
      />
      <NextButton
        onClick={() =>
          setCurrentIndex((currentIndex) => (currentIndex + 1) % items.length)
        }
      />
    </div>
  );
}
