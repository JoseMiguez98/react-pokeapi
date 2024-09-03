import { Pagination } from '@/features/core/components/pagination.component';
import { usePokemonStore } from '@/features/core/store/pokemon.store';

export const PokemonSearchPagination = () => {
  const { pageSize, changePage, pokemonsList } = usePokemonStore((store) => ({
    pageSize: store.pageSize,
    changePage: store.changePage,
    pokemonsList: store.pokemonsList,
  }));
  const pageCount = Math.floor(pokemonsList.length / pageSize);

  return <Pagination items={pokemonsList} onPageChange={changePage} pageCount={pageCount} />;
};
