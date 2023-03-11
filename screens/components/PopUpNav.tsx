import React from 'react'
import { NativeBaseProvider, HStack, IconButton} from 'native-base'
import { Settings, Search, Favorite } from '@mui/icons-material';

const PopUpNav = () => {
  return (
    <NativeBaseProvider>
        <HStack>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Settings />}/>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Search />}/>
            <IconButton variant="solid" size="20" borderRadius="26" icon={<Favorite />}/>
        </HStack>
    </NativeBaseProvider>
  )
}

export default PopUpNav;