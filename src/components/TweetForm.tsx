import { Avatar, Box, Button, ButtonProps, chakra, forwardRef, HStack, Icon, IconButton, Spacer, Stack, StackDivider, Textarea, TextareaProps } from '@chakra-ui/react'
import React, { FC, LegacyRef, MouseEventHandler, useState } from 'react'
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
export const TweetMediaAndSend: FC<TweetProps> = ({ onClick }) => {
  return <HStack>
    <HStack spacing={0}>
      <IconButton aria-label="image" py={3} size="lg" icon={<Icon as={HiOutlinePhotograph} />} variant="link" />
      <IconButton aria-label="pole" py={3} size="lg" icon={<Icon as={HiOutlineChartBar} />} variant="link" />
      <IconButton aria-label="emoji" py={3} size="lg" icon={<Icon as={HiOutlineEmojiHappy} />} variant="link" />
      <IconButton aria-label="calendar" py={3} size="lg" icon={<Icon as={HiOutlineCalendar} />} variant="link" />
    </HStack>
    <Spacer />
    <Button colorScheme="blue" onClick={onClick} p={4}>
      ツイートする
    </Button>
  </HStack>
}

export const TweetFormPost: FC<TweetProps & TweetTextareaProps> = ({ textareaRef, ...props }) => {
  return <Stack p={4} >
    <Stack direction="row">
      <Avatar />
      <Stack divider={<StackDivider color={"gray.400"} />} w={"100%"}>
        <TweetForm textareaRef={textareaRef} />
        <TweetMediaAndSend {...props} />
      </Stack>
    </Stack>
  </Stack>
}