import './Indicators.css';

type IndicatorProps = {
  count: number;
  index: number;
  onClick: (index: number) => void;
};

export function Indicators({ count, index, onClick }: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onClick(i)}
        className={`indicator-button ${index === i ? 'active' : ''}`}
        style={{ backgroundColor: i === index ? 'lightblue' : 'white' }}>
        {' '}
        {i + 1}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
