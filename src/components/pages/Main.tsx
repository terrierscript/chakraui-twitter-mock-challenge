import { Text, Avatar, Box, Divider, Heading, HStack, Icon, Stack, StackDivider, Spacer, Button, chakra, IconButton } from '@chakra-ui/react'
import { LoremIpsum } from 'lorem-ipsum'
import React, { useMemo } from 'react'
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { TweetFormPost } from '../TweetForm'

const lorem = new LoremIpsum()

const fmt = new Intl.NumberFormat("ja-JP", {
  notation: "compact",
})

const tweetActionProps = {
  baseStyle: {
    fontWeight: "normal",
    fontSize: "sm",
    color: "gray",
    p: 2,
    _hover: {
      bg: "blue.50"
    }
  }
}
const TweetActionButton = chakra(Button, tweetActionProps)
const TweetActionIconButton = chakra(IconButton, tweetActionProps)

const Tweets = () => {
  const tweet = useMemo(() => lorem.generateSentences(2), [])
  const name = useMemo(() => lorem.generateWords(2), [])
  const screen = useMemo(() => lorem.generateWords(1), [])
  const commentNum = fmt.format(Math.ceil(Math.random() * 10))
  const rtNum = fmt.format(Math.ceil(Math.random() * 10000))
  const likeNum = fmt.format(Math.ceil(Math.random() * 1000000))
  return <Stack direction="row" py={2} px={4} w={"100%"}>
    <Avatar />
    <Stack>
      <HStack p={0} pl={2} w={"100%"} justifyContent="space-between" >
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.400">@{screen}</Text>
        <Spacer />
        <TweetActionIconButton aria-label="more" color="gray" variant="link" icon={<Icon as={HiOutlineDotsHorizontal} />} fontSize={"sm"} size={"sm"} p={2} />
      </HStack>
      <Box px={2}>{tweet}</Box>
      <HStack color="gray.500" justifyContent="space-between" p={0}>
        <TweetActionButton variant="ghost" leftIcon={<Icon as={FaRegComment} />}>
          {commentNum !== "0" && commentNum}
        </TweetActionButton>
        <TweetActionButton variant="ghost" leftIcon={<Icon as={FaRetweet} />}>
          {rtNum !== "0" && rtNum}
        </TweetActionButton>
        <TweetActionButton variant="ghost" leftIcon={<Icon as={FaRegHeart} />}>
          {likeNum !== "0" && likeNum}
        </TweetActionButton>
        <TweetActionIconButton variant="ghost" iconSpacing={0} h={10} p={0} leftIcon={<Icon as={FiShare} />} />
      </HStack>
    </Stack>
  </Stack >
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
  const tweets = [...Array(20)].map(item => Math.random())
  return <Stack p={0}>
    <Header />
    <TweetFormPost />
    <Divider />
    <Stack divider={<StackDivider />} p={0}>
      {tweets.map(tweet => {
        return <Tweets key={tweet} />
      })}
    </Stack>
  </Stack>
}
