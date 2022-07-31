import React from 'react'

import { Plus } from 'iconoir-react'

import { Button, Tooltip } from '@chakra-ui/react'

interface ComponentProps {
  size: number
}

const CreateUserButton: React.FC<ComponentProps> = function ({ size }) {
  const iconSize = (size * 33.3333) / 100
  return (
    <Tooltip label="Adicionar Perfil" bg="zinc.900" gutter={18} hasArrow>
      <Button
        w={`${size}px`}
        h={`${size}px`}
        border="1px solid"
        borderColor="gray.300"
        rounded="full"
        bg="white"
        color="gray.400"
        shadow="md"
        _hover={{ bgColor: 'gray.50' }}
        _active={{ bgColor: 'gray.100' }}
      >
        <Plus width={iconSize} height={iconSize} />
      </Button>
    </Tooltip>
  )
}

export default CreateUserButton
