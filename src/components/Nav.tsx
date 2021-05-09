import { Text, As, Avatar, Box, Button, ButtonProps, HStack, Icon, Spacer, Stack, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, StackDivider, useBreakpointValue, Textarea } from '@chakra-ui/react'

import React, { FC, useRef } from 'react'
import { HiHome, HiHashtag, HiOutlineDotsCircleHorizontal, HiOutlineMail, HiBell, HiOutlineUser, HiOutlineBell, HiOutlineHome, HiDotsCircleHorizontal, HiMail, HiUser, HiOutlineDotsHorizontal } from "react-icons/hi"
import { FaFeatherAlt, FaKiwiBird } from "react-icons/fa"
import { TweetForm, TweetFormPost, TweetMediaAndSend, TweetTextArea } from './TweetForm'

const NaviLink: FC<{ isActive: boolean; activeIcon: As<any>; inactiveIcon: As<any>, children: string } & ButtonProps> = ({ isActive, activeIcon, inactiveIcon, ...props }) => {
  const isCollapse = useBreakpointValue({ base: true, xl: false })
  const icon = isActive ? activeIcon : inactiveIcon
  const color = isActive ? "blue.500" : "black"
  if (isCollapse) {
    const { children, ...iconButtonProps } = props
    return <IconButton as="a"
      size={"lg"}
      variant="ghost"
      aria-label={children}
      fontSize={"2xl"}
      w={12}
      h={12}
      color={color}
      icon={<Icon as={icon} />}
      {...iconButtonProps}
    />
  }
  return <Button as="a"
    size={"lg"}
    fontSize={"xl"}
    variant="ghost"
    justifyContent="start"
    iconSpacing={4}
    color={color}
    leftIcon={<Icon as={icon} />}
    {...props} />
}

const NavTweetButton: FC<ButtonProps> = (props) => {
  const isCollapse = useBreakpointValue({ base: true, xl: false })

  if (isCollapse) {
    return <IconButton
      variant="solid"
      aria-label="ツイートする"
      w={12} h={12}
      icon={<FaFeatherAlt />}
      {...props}
    />
  }
  return <Button
    p={6} fontSize="lg"
    {...props}
  >ツイートする</Button>
}

const NavTweet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialFocusRef = useRef()
  return <>
    <NavTweetButton onClick={onOpen} />
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialFocusRef}>
      <ModalOverlay />
      <ModalContent minW={"xl"}>
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
          </HStack >
        </ModalHeader >
        <ModalBody >
          <TweetFormPost textareaRef={initialFocusRef} />
        </ModalBody>
      </ModalContent >
    </Modal >
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
          <Text><Icon as={HiOutlineDotsHorizontal} /></Text>
        </HStack>
      </Button>
    </UserMenuPopOver>
  </Box>
}

export const Navi: FC<{}> = () => {
  const alignItem = useBreakpointValue({ base: "center", xl: "left" })

  return <Stack w={{ base: 20, xl: 300 }} h="100vh" p={2} alignItems={alignItem}>
    <Stack h="100vh" spacing={1} px={6}>
      <IconButton
        w={12} h={12} p={2} mx={2}
        aria-label="kiwi" variant="ghost" color={"blue.400"} as={FaKiwiBird} size="sm"
      />
      <NaviLink isActive={true} activeIcon={HiHome} inactiveIcon={HiOutlineHome}>ホーム</NaviLink>
      <NaviLink isActive={false} activeIcon={HiHashtag} inactiveIcon={HiHashtag}>話題の検索</NaviLink>
      <NaviLink isActive={false} activeIcon={HiBell} inactiveIcon={HiOutlineBell}>通知</NaviLink>
      <NaviLink isActive={false} activeIcon={HiMail} inactiveIcon={HiOutlineMail}>メッセージ</NaviLink>
      <NaviLink isActive={false} activeIcon={HiUser} inactiveIcon={HiOutlineUser}>プロフィール</NaviLink>
      <NaviLink isActive={false} activeIcon={HiDotsCircleHorizontal} inactiveIcon={HiOutlineDotsCircleHorizontal}>もっと見る</NaviLink>
      <NavTweet />
    </Stack>
    <Spacer />
    <UserMenu />
  </Stack>
}
