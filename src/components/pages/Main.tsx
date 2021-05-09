import { Avatar, Box, Divider, Heading, Stack, StackDivider } from '@chakra-ui/react'
import { LoremIpsum } from 'lorem-ipsum'
import React, { useMemo } from 'react'
import { TweetFormPost } from '../TweetForm'

const lorem = new LoremIpsum()
const Dummy = () => {
  const tweet = useMemo(() => lorem.generateSentences(2), [])
  return <Stack direction="row" p={4}>
    <Avatar />
    <Box>{tweet}</Box>
  </Stack>
}
const Header = () => {
  return <Box position="sticky" bg={"white"} top="0" zIndex={"sticky"}>
    <Stack p={4} direction="row">
      <Heading size="md">ホーム</Heading>
    </Stack>
    <Divider />
  </Box>
}

export const MainPage = () => {
  return <Stack p={0}>
    <Header />
    <TweetFormPost />
    <Divider />
    <Stack divider={<StackDivider />} p={0}>
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
    </Stack>
  </Stack>
}
