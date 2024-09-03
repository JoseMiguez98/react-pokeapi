import { useEffect } from 'react';
import { usePokemonStore } from '@/features/core/store/pokemon.store';
import { PokemonSearchScreen } from '@/features/pokemon-search/components/pokemon-search-screen.component';
import { AppContainer } from '@/features/core/components/app-container.component';

const App = () => {
  const fetchAllPokemons: () => void = usePokemonStore((store) => store.fetchAllPokemons);

  useEffect(() => {
    fetchAllPokemons();
  }, [fetchAllPokemons]);

  return (
    <AppContainer>
      <PokemonSearchScreen />
    </AppContainer>
  );
};

export default App;
