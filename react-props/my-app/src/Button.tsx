type ButtonProp = {
  text: string;
};

export function Button(buttonText: ButtonProp) {
  return <button>{buttonText.text}</button>;
}
