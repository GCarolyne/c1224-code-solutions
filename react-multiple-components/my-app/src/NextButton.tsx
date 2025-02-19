type NextButtonProps = {
  onClick: () => void;
};

export function NextButton({ onClick }: NextButtonProps) {
  return (
    <div>
      <button type="submit" onClick={() => onClick()} className="nextButt">
        Next
      </button>
    </div>
  );
}
