import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { PokemonType } from '@/features/core/types';
import '@/features/core/styles/pagination.styles.scss';

interface PokemonSearchPaginationProps {
  items: PokemonType[];
  onPageChange: (selected: number) => void;
  pageCount: number;
}

export const Pagination: React.FC<PokemonSearchPaginationProps> = ({
  pageCount,
  onPageChange,
}: PokemonSearchPaginationProps) => (
  <ReactPaginate
    className="pagination"
    nextClassName="pagination__next"
    previousClassName="pagination__previous"
    containerClassName="pagination__container"
    pageLinkClassName="pagination__item"
    activeClassName="pagination__item--is-active"
    breakClassName="pagination__break"
    activeLinkClassName="pagination__item--is-active-link"
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel={<ChevronLeftIcon />}
    nextLabel={<ChevronRightIcon />}
    onPageChange={(selectedItem: { selected: number }) => onPageChange(selectedItem.selected)}
    breakLabel="..."
  />
);
