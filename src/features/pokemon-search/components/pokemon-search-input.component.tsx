import { useCallback } from 'react';
import { Input, InputGroup, InputRightElement, Spinner } from '@chakra-ui/react';
import { usePokemonStore } from '@/features/core/store/pokemon.store';
import { debounce } from '@/features/core/utils/debounce.util';

interface PokemonSearchInputProps {
  placeholder?: string;
  debounceTime?: number;
}

export const PokemonSearchInput = ({ placeholder, debounceTime }: PokemonSearchInputProps) => {
  const { searchPokemon, loadingIndex } = usePokemonStore((store) => ({
    searchPokemon: store.searchPokemon,
    loadingIndex: store.loadingIndex,
  }));
  const handleOnChange = debounceTime
    ? useCallback(debounce(searchPokemon, debounceTime), [searchPokemon, debounceTime])
    : searchPokemon;

  return (
    <InputGroup>
      <Input
        disabled={loadingIndex}
        placeholder={placeholder || 'Type something...'}
        onChange={(e) => handleOnChange(e.target.value)}
        width="100%"
      />
      {loadingIndex && (
        <InputRightElement>
          <Spinner size="sm" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
