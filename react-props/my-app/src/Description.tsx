type Ptag = {
  text: string;
};

export function Description(des: Ptag) {
  return <p>{des.text}</p>;
}
