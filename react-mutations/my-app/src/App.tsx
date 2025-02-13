/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { PokemonList } from './PokemonList';
import { Pokemon } from './PokemonList';
export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    const newPoke = {
      number: '009',
      name: 'Golden',
    };
    setPokedex([...pokedex, newPoke]);
  }

  function handleUpdate(): void {
    const updatePokedex = pokedex.map((pokemon) =>
      pokemon.number === '039' ? { ...pokemon, name: 'Alfons' } : pokemon
    );
    setPokedex(updatePokedex);
  }
  function handleRemove(): void {
    const deletedItems = [...pokedex];
    const item = deletedItems.filter((poke) => poke.number !== '004');
    setPokedex(item);
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
