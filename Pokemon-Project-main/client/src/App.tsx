import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';
import { Loader } from './components/Loader';
import { ErrorState } from './components/ErrorState';

interface PokemonData {
  name: string;
  id: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  height: number;
  weight: number;
}

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchPokemon = async (name: string) => {
    if (!name.trim()) return;

    setLoading(true);
    setError('');
    setPokemon(null);

    try {
      const response = await fetch(`http://localhost:8080/api/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchPokemon} />

      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  )
}

export default App
