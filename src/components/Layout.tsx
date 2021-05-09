import { Box, Container, Stack, StackDivider } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Navi } from './Nav'
import { News } from './News'

export const Layout: FC<{}> = ({ children }) => <Container maxW="7xl" >
  <Stack direction="row"
    divider={<StackDivider h="100vh" bg="red" position="sticky" top="0" />} spacing={0}
  >
    <Box position="sticky" h={0} alignSelf="start" top="0" bg={"white"} zIndex={"sticky"}>
      <Navi />
    </Box>
    <Box w={640} minH="100vh">
      <Box>
        {children}
      </Box>
    </Box>
    <Box w={{ base: 0, lg: 400 }} display={{ base: "none", lg: "block" }} minW={400} h="100vh">
      <News />
    </Box>
  </Stack>
</Container>
