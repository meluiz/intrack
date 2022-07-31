import React from 'react'

import randomAvatar from '@util/random-avatar'

import Avatar, { AvatarConfig, genConfig } from 'react-nice-avatar'

import { Box, Flex } from '@chakra-ui/react'

interface ComponentProps {
  size: number
  avatar?: AvatarConfig
}

const ProfileCard: React.FC<ComponentProps> = function ({ size, avatar }) {
  const randomize = randomAvatar()
  const config = genConfig(avatar || randomize)
  return (
    <Box
      w={`${size}px`}
      h={`${size}px`}
      display="block"
      rounded="full"
      pos="relative"
      overflow="hidden"
      bg="white"
    >
      <Flex w="100%" h="100%" align="center" justify="center" pos="relative">
        <Avatar style={{ width: '100%', height: '100%' }} {...config} />
      </Flex>
    </Box>
  )
}

export default ProfileCard
