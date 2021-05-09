import { Box, Container, Stack, StackDivider } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Navi } from './Nav'

export const Layout: FC<{}> = ({ children }) => <Container maxW="7xl" >
  <Stack direction="row" divider={<StackDivider />} spacing={0} >
    <Box position="sticky" h={0} alignSelf="start" top="0" bg={"white"} zIndex={"sticky"}>
      <Navi />
    </Box>
    <Box w={640} h="100vh">
      <Box>
        {children}
      </Box>
    </Box>
    <Box bg={"orange.100"} w={{ base: 0, lg: 400 }} maxW={400} h="100vh">
    </Box>
  </Stack>
</Container>
