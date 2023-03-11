import React from 'react'
import {NativeBaseProvider, HStack, IconButton, HamburgerIcon, ChevronDownIcon, ChevronLeftIcon, Center} from 'native-base'

const CardNav = () => {
  return (
    <NativeBaseProvider>
        <Center>
            <HStack space={6} alignItems="center">
                <IconButton variant="solid" size="16" borderRadius="20" icon={<ChevronLeftIcon size={10} />}/>
                <IconButton variant="solid" size="20" borderRadius="26" icon={<ChevronDownIcon size={12} />}/>
                <IconButton variant="solid" size="16" borderRadius="20" icon={<HamburgerIcon size={10} />}/>
            </HStack>
        </Center>
    </NativeBaseProvider>
  )
}

export default CardNav