import React from 'react'

import { List, ListItem } from '@chakra-ui/react'

const Component: React.FC = function () {
  return (
    <List>
      <ListItem>
        Chrome: <span id="chrome-version"></span>
      </ListItem>
      <ListItem>
        Node: <span id="node-version"></span>
      </ListItem>
      <ListItem>
        Electron: <span id="electron-version"></span>
      </ListItem>
    </List>
  )
}

export default Component
