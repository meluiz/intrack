import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/react'
import CreateUserButton from '@component/containers/home/create-user'

const Component: React.FC = function () {
  return (
    <Box w="100%" h="100vh" display="block" pos="relative">
      <Box
        w="100%"
        h="80px"
        display="block"
        pos="relative"
        bg="transparent"
        zIndex={2}
      >
        <Flex
          w="100%"
          maxW="80%"
          h="100%"
          align="center"
          justify="center"
          gap="32px"
          mx="auto"
          textAlign="center"
        >
          <Flex w="100%" align="center" justify="flex-start" pos="relative">
            <Heading
              textTransform="lowercase"
              color="zinc.900"
              fontSize="32px"
              fontWeight="bold"
              userSelect="none"
            >
              intrack
            </Heading>
          </Flex>
        </Flex>
      </Box>
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        overflow="hidden"
        bg="zinc.100"
      >
        <Flex
          w="100%"
          maxW="80%"
          h="100%"
          align="center"
          justify="center"
          gap="32px"
          mx="auto"
          textAlign="center"
        >
          <CreateUserButton size={128} />
        </Flex>
      </Box>
    </Box>
  )
}

export default Component
