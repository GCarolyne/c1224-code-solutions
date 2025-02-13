type Props = {
  label: string;
  buttonClicked: () => void;
};
export function Button({ label, buttonClicked }: Props) {
  return <button onClick={buttonClicked}>{label}</button>;
}
