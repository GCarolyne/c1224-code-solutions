import './App.css';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <>
      <Banner items={items} />
      <PrevButton />
      <Indicators />
      <NextButton />
    </>
  );
}

export default App;
