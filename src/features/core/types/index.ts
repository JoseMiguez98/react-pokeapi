import { PokemonIndex } from '@/features/core/search-indexes/pokemon-index';

export type PokemonType = {
  id: string;
  name: string;
  thumbnail: string;
};
export type PokemonIndexType = {
  name: string;
  url: string;
};
export type PokemonStoreType = {
  pokemonIndex: PokemonIndex | null;
  pokemonsList: PokemonType[];
  currentOffset: number;
  pageCount: number;
  pageSize: number;
  totalResults: number;
  fetchAllPokemons: () => void;
  searchPokemon: (searchTerm: string) => void;
  changePage: (currentPage: number) => void;
  loadingIndex: boolean;
  loadingSearch: boolean;
  hasPerformedSearch: boolean;
};
