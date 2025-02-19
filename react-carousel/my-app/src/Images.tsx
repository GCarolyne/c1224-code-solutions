// import type { Image } from './App';
import './Indicators.css';
export type Image = {
  src: string;
  alt: string;
};
type Prop = {
  image: Image;
};

export function Images({ image }: Prop) {
  return (
    <div className="column Img">
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
