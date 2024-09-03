import { create } from 'zustand';
import { PokemonIndexType, PokemonStoreType } from '@/features/core/types';
import { PokemonIndex } from '@/features/core/search-indexes/pokemon-index';
import { fetchAll } from '@/features/core/utils/fetchAll.util';
import { environmentService } from '@/features/services/environment.service';

export const usePokemonStore = create<PokemonStoreType>((set, get) => ({
  currentOffset: 0,
  pageSize: 6,
  totalResults: 0,
  pokemonIndex: null,
  pokemonsList: [],
  pageCount: 0,
  loadingIndex: false,
  loadingSearch: false,
  hasPerformedSearch: false,
  fetchAllPokemons: async () => {
    try {
      set({ loadingIndex: true });
      const response = await (await fetch(environmentService.API_URL)).json();
      const pokemonsIndexResult: PokemonIndexType[] = response.results.filter((pokemon: PokemonIndexType) => ({
        name: pokemon.name,
        url: pokemon.url,
      }));
      const pokemonIndex = PokemonIndex.createIndex(pokemonsIndexResult);
      set({ pokemonIndex });
    } catch (err) {
      console.error(err);
    } finally {
      set({ loadingIndex: false });
    }
  },
  searchPokemon: async (searchTerm: string) => {
    const { pokemonIndex, pageSize } = get();

    if (searchTerm.length) {
      set({ hasPerformedSearch: true });
    } else {
      set({ hasPerformedSearch: false });
    }

    try {
      set({ loadingSearch: true });
      const searchIndexResult: string[] | undefined = pokemonIndex?.search(searchTerm);
      const pokemonsResults = searchIndexResult?.length ? await fetchAll(searchIndexResult) : [];

      set({
        totalResults: pokemonsResults.length,
        currentOffset: 0,
        pageCount: Math.floor(pokemonsResults.length / pageSize),
        pokemonsList: pokemonsResults.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          thumbnail: pokemon.sprites.other['official-artwork'].front_default,
        })),
      });
    } catch (err) {
    } finally {
      set({ loadingSearch: false });
    }
  },
  changePage: async (currentPage: number) => {
    const pageSize = get().pageSize;
    set({ currentOffset: pageSize * currentPage });
  },
}));
