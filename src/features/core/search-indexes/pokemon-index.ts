import { PokemonIndexType } from '@/features/core/types';
import Fuse from 'fuse.js';

export class PokemonIndex {
  private static instance: PokemonIndex | null = null;
  private searchIndex: Fuse<PokemonIndexType> | null = null;

  constructor(pokemonIndex: PokemonIndexType[]) {
    this.searchIndex = new Fuse(pokemonIndex, {
      keys: ['name'],
      threshold: 0.2,
    });
  }

  static createIndex(pokemonIndex: PokemonIndexType[]) {
    if (this.instance === null) {
      this.instance = new PokemonIndex(pokemonIndex);
    }
    return this.instance;
  }

  search(searchTerm: string) {
    if (this.searchIndex === null) {
      throw new Error('Search index has not been initialized.');
    }

    return this.searchIndex.search(searchTerm).map((result) => result.item.url);
  }
}
