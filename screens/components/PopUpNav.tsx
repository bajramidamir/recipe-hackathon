import React from 'react'
import { Box, HStack, IconButton} from 'native-base'
import { Settings, Search, Favorite } from '@mui/icons-material';

type visiblePropType = {
    visible: boolean
}

const PopUpNav = ({ visible } : visiblePropType) => {
  return (
    <Box>
        <HStack>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Settings />}/>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Search />}/>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Favorite />}/>
        </HStack>
    </Box>
  )
}

export default PopUpNav;