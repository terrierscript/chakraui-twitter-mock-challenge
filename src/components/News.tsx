import { Text, Box, Icon, Input, InputGroup, InputLeftElement, Stack, StackDivider } from "@chakra-ui/react"
import { LoremIpsum } from "lorem-ipsum"
import React, { useMemo } from "react"
import { HiSearch } from "react-icons/hi"

const lorem = new LoremIpsum()

const NewsItem = () => {
  const title = useMemo(() => lorem.generateWords(1), [])
  const news = useMemo(() => lorem.generateSentences(1), [])

  return <Stack spacing={0} p={4}>
    <Text color="gray.500" fontSize="sm">{title}</Text>
    <Text fontWeight="bold">{news}</Text>
  </Stack>
}

export const News = () => {
  return <Stack p={2}>
    <InputGroup>
      <InputLeftElement
        children={<Icon as={HiSearch} color="gray.500" />}
      />
      <Input rounded="full" bg="gray.100" variant="ghost"
        placeholder="キーワードを検索"
      />
    </InputGroup>
    <Stack bg="gray.100" rounded="xl" divider={<StackDivider />} spacing={0}>
      <Box p={4} fontWeight="bold" fontSize="lg">
        いまどうしてる？
      </Box>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Stack>
  </Stack>
}