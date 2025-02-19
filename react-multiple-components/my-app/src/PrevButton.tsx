type PrevButtonProp = {
  onClick: () => void;
};

export function PrevButton({ onClick }: PrevButtonProp) {
  return (
    <div>
      <button onClick={onClick} className="prevBut">
        Prev
      </button>
    </div>
  );
}
