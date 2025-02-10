import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Carolyne');
promise
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.message));
