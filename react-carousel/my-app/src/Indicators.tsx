import './Indicators.css';
import { FaRegCircle, FaCircle } from 'react-icons/fa';
type IndicatorProps = {
  count: number;
  selected: number;
  onClick: (index: number) => void;
};

export function Indicators({ count, selected, onClick }: IndicatorProps) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(
      i === selected ? (
        <FaCircle key={i} onClick={() => onClick(i)} />
      ) : (
        <FaRegCircle key={i} onClick={() => onClick(i)} />
      )
    );
  }

  return <>{circles}</>;
}
