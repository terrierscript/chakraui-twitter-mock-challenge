import {Box, Container, HStack, Link } from '@chakra-ui/react'
import React, { FC, ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { Navi } from './Nav'

export const Layout: FC<{}> = ({ children }) => <Container maxW="7xl" >
  <HStack>
    <Navi />
    <Box bg={"blue.100"} w={640} h="100vh">
      aaa
      {children}
    </Box>
    <Box bg={"orange.100"} w={{ base: 0, lg: 400}} maxW={400} h="100vh">
    </Box>
  </HStack>
</Container>
