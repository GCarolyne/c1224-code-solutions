import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imagesSrc = ['/starry-sky.jpeg', '/Jupiter.webp', '/saturn.jpg'];
const theCaptions = [
  'A Beautiful Image of Space',
  'A view of Jupiter',
  'A view of Saturn',
];
const descriptions = [
  'Our Beloved Milky Way',
  'The planet Jupiter',
  'The Planet Saturn',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imagesSrc} />
      <Caption captions={theCaptions} />
      <Description text={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
