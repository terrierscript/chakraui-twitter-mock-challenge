import { As, Button, ButtonProps, HStack, Icon, Spacer, Stack, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, IconButton, useBreakpointValue } from '@chakra-ui/react'

import React, { FC, useRef } from 'react'
import { HiHome, HiHashtag, HiOutlineDotsCircleHorizontal, HiOutlineMail, HiBell, HiOutlineUser, HiOutlineBell, HiOutlineHome, HiDotsCircleHorizontal, HiMail, HiUser } from "react-icons/hi"
import { FaFeatherAlt, FaKiwiBird } from "react-icons/fa"
import { TweetFormPost } from './TweetForm'
import { UserMenu } from './NavUser'

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
    w={"100%"}
    p={6}
    fontSize="lg"
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

export const Navi: FC<{}> = () => {
  const x = useBreakpointValue({ base: true, xl: false })
  const alignItem = useBreakpointValue({ base: "center", xl: "start" })
  const px = useBreakpointValue({ base: 0, xl: 4 })

  return <Stack w={{ base: 20, xl: 300 }} h="100vh" pb={4}
    alignItems={alignItem} spacing={1} px={px} >
    <IconButton
      mx={4}
      my={2}
      alignSelf={alignItem}
      fontSize="3xl"

      aria-label="kiwi" variant="ghost" color={"blue.400"} icon={<Icon as={FaKiwiBird} />}
    />
    <NaviLink isActive={true} activeIcon={HiHome} inactiveIcon={HiOutlineHome}>ホーム</NaviLink>
    <NaviLink isActive={false} activeIcon={HiHashtag} inactiveIcon={HiHashtag}>話題の検索</NaviLink>
    <NaviLink isActive={false} activeIcon={HiBell} inactiveIcon={HiOutlineBell}>通知</NaviLink>
    <NaviLink isActive={false} activeIcon={HiMail} inactiveIcon={HiOutlineMail}>メッセージ</NaviLink>
    <NaviLink isActive={false} activeIcon={HiUser} inactiveIcon={HiOutlineUser}>プロフィール</NaviLink>
    <NaviLink isActive={false} activeIcon={HiDotsCircleHorizontal} inactiveIcon={HiOutlineDotsCircleHorizontal}>もっと見る</NaviLink>
    <NavTweet />
    <Spacer />
    <UserMenu />
  </Stack>
}
