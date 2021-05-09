import { Avatar, Button, ButtonProps, chakra, HStack, Icon, IconButton, Spacer, Stack, StackDivider, Textarea, TextareaProps } from '@chakra-ui/react'
import React, { FC, LegacyRef, useState } from 'react'
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineEmojiHappy, HiOutlineGlobe, HiOutlinePhotograph } from "react-icons/hi"
type TweetTextareaProps = TextareaProps & {
  textareaRef?: LegacyRef<any>
}
export const TweetTextArea: FC<TweetTextareaProps> = ({ textareaRef, ...props }) => {
  const [lineNum, setLineNum] = useState(0)
  return <Textarea
    // border="none"
    p={2}
    size="lg"
    placeholder="いまどうしてる？"
    onChange={(e) => {
      setLineNum(Math.max(e.target.value.split("\n").length, 3))
      props?.onChange?.(e)
    }}
    variant="unstyled"
    resize="none"
    rows={lineNum}
    ref={textareaRef}
    noOfLines={lineNum}
    {...props}
  />
}

export const TweetForm: FC<TweetTextareaProps> = ({ textareaRef }) => {
  return <Stack>
    <Stack>
      <TweetTextArea textareaRef={textareaRef} />
      <Button w={"fit-content"} variant="link" size="sm" leftIcon={<Icon as={HiOutlineGlobe} />}>全員が返信できます</Button>
    </Stack>
  </Stack>
}

type TweetProps = Pick<ButtonProps, "onClick">

const TweetIconButton = chakra(IconButton, {
  baseStyle: {
    h: 12,
    w: 12,
    p: 2
  }
})

export const TweetMediaAndSend: FC<TweetProps> = ({ onClick }) => {
  return <HStack spacing={0}>
    <TweetIconButton aria-label="image" size="lg" icon={<Icon as={HiOutlinePhotograph} />} variant="link" />
    <TweetIconButton aria-label="pole" size="lg" icon={<Icon as={HiOutlineChartBar} />} variant="link" />
    <TweetIconButton aria-label="emoji" size="lg" icon={<Icon as={HiOutlineEmojiHappy} />} variant="link" />
    <TweetIconButton aria-label="calendar" size="lg" icon={<Icon as={HiOutlineCalendar} />} variant="link" />
    <Spacer />
    <Button colorScheme="blue" onClick={onClick} p={4}>
      ツイートする
    </Button>
  </HStack>
}

export const TweetFormPost: FC<TweetProps & TweetTextareaProps> = ({ textareaRef, ...props }) => {
  return <Stack px={4} py={2} >
    <Stack direction="row">
      <Avatar />
      <Stack divider={<StackDivider color={"gray.400"} />} w={"100%"}>
        <TweetForm textareaRef={textareaRef} />
        <TweetMediaAndSend {...props} />
      </Stack>
    </Stack>
  </Stack>
}