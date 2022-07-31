import React from 'react'

import { Button, Tooltip } from '@chakra-ui/react'
import ProfileCard from '@component/card/profile-card'

const Profile: React.FC = function () {
  return (
    <Tooltip label="Luiz Felipe" bg="zinc.900" gutter={18} hasArrow>
      <Button
        flexDir="column"
        boxShadow="0 0 0 3px white, 0 0 0 5px var(--chakra-colors-gray-300)"
        rounded="full"
        variant="reset"
        _hover={{
          boxShadow:
            '0 0 0 3px white, 0 0 0 6px var(--chakra-colors-green-600)',
        }}
      >
        <ProfileCard size={144} />
      </Button>
    </Tooltip>
  )
}

export default Profile
