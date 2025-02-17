import './Indicators.css';

type IndicatorProps = {
  count: number;
  index: number;
  onClick: (index: number) => void;
};

export function Indicators({ count, index }: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        className={index === i ? 'active' : ''}
        style={{ backgroundColor: i === index ? 'lightblue' : 'white' }}>
        {' '}
        {i + 1}
      </button>
    );
  }

  return <div className="idicators-container">{buttons}</div>;
}
