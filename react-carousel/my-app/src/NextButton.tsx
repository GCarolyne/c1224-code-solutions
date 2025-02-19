import { IoIosArrowForward } from 'react-icons/io';
import './Indicators.css';

type Props = {
  onClick: () => void;
};
export function NextButton({ onClick }: Props) {
  return (
    <div className="column">
      <IoIosArrowForward onClick={onClick} />
    </div>
  );
}
