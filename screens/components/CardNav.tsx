import React, { useState } from 'react'
import {Box, HStack, IconButton, HamburgerIcon, ChevronDownIcon, ChevronLeftIcon, Center} from 'native-base';
import PopUpNav from './PopUpNav';

const CardNav = () => {
    const [visible, setVisible] = useState(false);

  return (
    <Box>
        <Center>
            <HStack space={6} alignItems="center" marginTop="6">
                <IconButton variant="solid" size="16" borderRadius="20" icon={<ChevronLeftIcon size={10} />}/>
                <IconButton variant="solid" size="20" borderRadius="26" icon={<ChevronDownIcon size={12} />}/>
                <IconButton onPress={() => setVisible(!visible)} variant="solid" size="16" borderRadius="20" icon={<HamburgerIcon size={10} />}/>
                
            </HStack>
        </Center>
    </Box>
  )
}

export default CardNav;