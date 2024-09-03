import { Heading } from '@chakra-ui/react';
import { PokemonSearchInput } from './pokemon-search-input.component';
import { PokemonSearchList } from './pokemon-search-list.component';

export const PokemonSearchScreen = () => (
  <>
    <Heading as="h1">Pokemon Finder</Heading>
    <Heading as="h2" size="xs" color="gray">
      El que quiere pokemon, que los busque
    </Heading>
    <PokemonSearchInput placeholder="Busca tu pokemon..." debounceTime={2000} />
    <PokemonSearchList />
  </>
);
