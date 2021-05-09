import { Text, Avatar, Box, Button, HStack, Icon, Spacer, Stack, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, StackDivider, useBreakpointValue, ButtonProps, Portal, forwardRef } from '@chakra-ui/react'
import React, { FC } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi"

const User = () => {
  return <HStack>
    <Avatar />
    <Stack spacing={1} alignItems="self-start">
      <Text fontWeight="bold">user name</Text>
      <Text>@user</Text>
    </Stack>
  </HStack>
}
const UserPopoverContent = () => {
  return <Stack spacing={4} py={4} px={4}
    divider={<StackDivider borderColor="gray.200" />}
  >
    <User />
    <Text>既存のアカウントを追加</Text>
    <Text>ログアウト</Text>
  </Stack>
}

const UserButton: FC<ButtonProps> = forwardRef((props, ref) => {
  // const isCollapse = useBreakpointValue({ base: true, xl: false })
  // const justifyContent = useBreakpointValue({ base: "center", xl: "start" })
  // const p = useBreakpointValue({ base: 0, xl: 2 })
  const responsiveProps = useBreakpointValue<ButtonProps>({
    base: {
      justifyContent: "center",
      p: 0,
      w: 16,
      h: 16,
    },
    xl: {
      justifyContent: "start",
      p: 2,
      w: "100%",
      h: "auto"
    }
  })
  return <Button
    ref={ref}
    // justifyContent={justifyContent}
    // p={p}
    // w={isCollapse ? 16 : "100%"}
    // h={isCollapse ? 16 : "auto"}
    justifyItems="start"
    fontWeight="normal"
    background={"transparent"}
    _hover={{ bg: "blue.50" }}
    // variant="outline"
    {...responsiveProps}
    {...props}
  />
})

const UserMenuInner = () => {
  const isCollapse = useBreakpointValue({ base: true, xl: false })
  if (isCollapse) {
    return <Avatar size="md" />
  }
  return <HStack w="100% " p={2}>
    <User />
    <Spacer />
    <Text >
      <Icon as={HiOutlineDotsHorizontal} fontSize="sm" />
    </Text>
  </HStack >
}


export const UserMenu = () => {
  return <Popover placement={"top-start"}>
    <PopoverTrigger>
      <UserButton color="black">
        <UserMenuInner />
      </UserButton>
    </PopoverTrigger>
    <PopoverContent >
      <PopoverArrow />
      <PopoverBody p={0}>
        <UserPopoverContent />
      </PopoverBody>
    </PopoverContent>
  </Popover>
}
