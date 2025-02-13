import { Pokemon } from './App';

type Props = {
  poxedex: Pokemon[];
};

export function PokemonList({ poxedex }: Props) {
  const listPoke = poxedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listPoke}</ul>;
}
