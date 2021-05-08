import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'

export const Layout: FC<{}> = ({ children }) => <Container maxW="full">
  {children}
</Container>
