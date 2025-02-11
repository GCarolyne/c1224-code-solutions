type Props = {
  text: string;
};

export function Button(buttonText: Props) {
  return <button>{buttonText.text}</button>;
}
