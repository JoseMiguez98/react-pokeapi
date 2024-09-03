import { Flex, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const AppContainer = ({ children }: PropsWithChildren) => (
  <Flex w="full" p="16" align="center" justify="center">
    <Stack w="700px" height="700px">
      {children}
    </Stack>
  </Flex>
);
