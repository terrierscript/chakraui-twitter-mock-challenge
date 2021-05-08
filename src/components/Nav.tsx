import { Text, As, Avatar, Box, Button, ButtonProps, HStack, Icon, Spacer, Stack, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Link, Textarea, TextareaProps, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Divider, StackDivider } from '@chakra-ui/react'

import React, { FC, useState } from 'react'
import { HiHome, HiHashtag, HiOutlineDotsCircleHorizontal, HiOutlineMail, HiBell, HiOutlineUser, HiOutlineBell, HiOutlineHome, HiDotsCircleHorizontal, HiMail, HiUser, HiOutlineDotsHorizontal, HiGlobe, HiOutlineGlobe, HiOutlinePhotograph, HiOutlineChartBar, HiOutlineCalendar, HiOutlineEmojiHappy } from "react-icons/hi"
import { FaKiwiBird } from "react-icons/fa"

const NaviLink: FC<{ isActive: boolean; activeIcon: As<any>; inactiveIcon: As<any> } & ButtonProps> = ({ isActive, activeIcon, inactiveIcon, ...props }) => {
  const icon = isActive ? activeIcon : inactiveIcon
  const color = isActive ? "blue.500" : "black"
  return <Button as="a"
    // fontSize="xl"
    size={"lg"}
    variant="ghost"
    justifyContent="start"
    iconSpacing={4}
    color={color}
    leftIcon={<Icon as={icon} />}
    {...props} />
}

const TweetTextArea: FC<TextareaProps> = (props) => {
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
    noOfLines={lineNum}
  />
}
const TweetForm = () => {
  return <Stack>
    <Stack>

      <TweetTextArea />
      <Button w={"fit-content"} variant="link" size="sm" leftIcon={<Icon as={HiOutlineGlobe} />}>全員が返信できます</Button>
    </Stack>
  </Stack>

}
const TweetButton = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return <>
    <Button cursor="pointer"
      p={6} fontSize="lg" onClick={onOpen}
    >ツイートする</Button>
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent >
        <ModalHeader borderBottom="1px solid" borderBottomColor="gray.100" py={2} pl={2} pr={4} >
          <HStack >
            <ModalCloseButton
              top={0}
              left={0}
              size={"lg"}
              position="relative"
              color="blue.400"
            />
            <Spacer />
            <Button variant="link">
              未送信ツイート
            </Button>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Stack direction="row">
            <Avatar />
            <TweetForm />
          </Stack>
        </ModalBody>
        <ModalFooter borderTop={"1px solid"} borderTopColor="gray.100">
          <HStack spacing={0}>
            <IconButton aria-label="image" py={3} size="lg" icon={<Icon as={HiOutlinePhotograph} />} variant="link" />
            <IconButton aria-label="pole" py={3} size="lg" icon={<Icon as={HiOutlineChartBar} />} variant="link" />
            <IconButton aria-label="emoji" py={3} size="lg" icon={<Icon as={HiOutlineEmojiHappy} />} variant="link" />
            <IconButton aria-label="calendar" py={3} size="lg" icon={<Icon as={HiOutlineCalendar} />} variant="link" />
          </HStack>
          <Spacer />
          <Button colorScheme="blue" onClick={onClose}>
            ツイート
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
}
const User = () => {
  return <HStack >
    <Avatar />
    <Stack spacing={1} alignItems="self-start">
      <Text fontWeight="bold">user name</Text>
      <Text>@user</Text>
    </Stack>
  </HStack >

}

const UserMenuPopOver = ({ children }) => {
  return <Popover>
    <PopoverTrigger>
      {children}
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverBody p={0} >
        <Stack spacing={4} py={4} px={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <User />
          <Text>既存のアカウントを追加</Text>
          <Text>ログアウト</Text>
        </Stack>
      </PopoverBody>
    </PopoverContent>
  </Popover>
}

const UserMenu = () => {
  return <Box py={4}>
    <UserMenuPopOver>
      <Button
        w={"100%"} justifyContent="flex-start"
        color="black"
        py={8}
        variant="ghost"
        justifyItems="start"
        fontWeight="normal"
        background={"transparent"}
        _hover={{ bg: "blue.50" }}
      >
        <HStack w="100%" >
          <User />
          <Spacer />
          <Text><Icon size="xl" as={HiOutlineDotsHorizontal} /></Text>
        </HStack>
      </Button>
    </UserMenuPopOver>
  </Box>
}
export const Navi: FC<{}> = () => {
  return <Stack w={{ base: 20, xl: 300 }} h="100vh" p={2}>
    <Stack h="100vh" spacing={1}>
      <Box px={4}><Icon color={"blue.400"} as={FaKiwiBird} fontSize="3xl" /></Box>
      <NaviLink isActive={true} activeIcon={HiHome} inactiveIcon={HiOutlineHome}>ホーム</NaviLink>
      <NaviLink isActive={false} activeIcon={HiHashtag} inactiveIcon={HiHashtag}>話題の検索</NaviLink>
      <NaviLink isActive={false} activeIcon={HiBell} inactiveIcon={HiOutlineBell}>通知</NaviLink>
      <NaviLink isActive={false} activeIcon={HiMail} inactiveIcon={HiOutlineMail}>メッセージ</NaviLink>
      <NaviLink isActive={false} activeIcon={HiUser} inactiveIcon={HiOutlineUser}>プロフィール</NaviLink>
      <NaviLink isActive={false} activeIcon={HiDotsCircleHorizontal} inactiveIcon={HiOutlineDotsCircleHorizontal}>もっと見る</NaviLink>
    </Stack>
    <TweetButton />
    <Spacer />
    <UserMenu />
  </Stack>
}
