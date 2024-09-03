import { Box, Flex, Image, Spinner, Stack, Text } from '@chakra-ui/react';
import { PokemonType } from '@/features/core/types';
import { formatString } from '@/features/core/utils/formatString';
import { usePokemonStore } from '@/features/core/store/pokemon.store';
import { PokemonSearchPagination } from './pokemon-search-pagination.component';

const PokemonRow = ({ items }: { items: PokemonType[] }) => (
  <Flex direction="row" justify="center" mb={4} width="100%" gap={1}>
    {items.map((item) => (
      <Box key={item.id} p={2} borderWidth="1px" borderRadius="md" boxShadow="md" width="30%">
        <Image src={item.thumbnail} alt={item.name} borderRadius="md" mb={2} />
        <Text textAlign="center">{formatString(item.name)}</Text>
      </Box>
    ))}
  </Flex>
);

export const PokemonSearchList = () => {
  const { pageCount, currentOffset, pageSize, loadingSearch, pokemonsList, hasPerformedSearch } = usePokemonStore(
    (store) => ({
      pageCount: store.pageCount,
      currentOffset: store.currentOffset,
      pokemonsList: store.pokemonsList,
      pageSize: store.pageSize,
      loadingSearch: store.loadingSearch,
      hasPerformedSearch: store.hasPerformedSearch,
    }),
  );
  const currentItems: PokemonType[] | null = pokemonsList?.length
    ? pokemonsList.slice(currentOffset, currentOffset + pageSize)
    : null;

  return (
    <Flex direction="column" align="center" justify="center" minH="570px" pt={4}>
      {loadingSearch ? (
        <Spinner size="xl" />
      ) : (
        <>
          {currentItems?.length ? (
            <>
              <PokemonRow items={currentItems.slice(0, 3)} />
              <PokemonRow items={currentItems.slice(3, 6)} />
              {pageCount > 0 ? (
                <Stack w="full">
                  <PokemonSearchPagination />
                </Stack>
              ) : null}
            </>
          ) : hasPerformedSearch ? (
            <Text color="gray.500">No se encontraron pokemones...</Text>
          ) : null}
        </>
      )}
    </Flex>
  );
};
