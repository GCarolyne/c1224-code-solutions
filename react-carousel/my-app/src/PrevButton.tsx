import { IoIosArrowBack } from 'react-icons/io';
import './Indicators.css';

type Props = {
  onClick: () => void;
};
export function PrevButton({ onClick }: Props) {
  return (
    <div className="column">
      <IoIosArrowBack onClick={onClick} />
    </div>
  );
}
