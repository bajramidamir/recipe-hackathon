import React from 'react'
import {NativeBaseProvider, HStack, IconButton, HamburgerIcon, ChevronDownIcon, ChevronLeftIcon, Center, Popover, Button} from 'native-base'

const CardNav = () => {
  return (
    <NativeBaseProvider>
        <Center>
            <HStack space={6} alignItems="center" marginTop="6">
                <IconButton variant="solid" size="16" borderRadius="20" icon={<ChevronLeftIcon size={10} />}/>
                <IconButton variant="solid" size="20" borderRadius="26" icon={<ChevronDownIcon size={12} />}/>
                <Popover trigger={(triggerProps: JSX.IntrinsicAttributes) => {
                    return <IconButton variant="solid" size="16" borderRadius="20" icon={<HamburgerIcon size={10} />}/>
                }}>
                    <Popover.Content>
                    <IconButton variant="solid" size="16" borderRadius="20" icon={<HamburgerIcon size={10} />}/>
                    </Popover.Content>
                </Popover>
                
            </HStack>
        </Center>
        <Popover trigger={(triggerProps: JSX.IntrinsicAttributes) => {
      return <Button {...triggerProps} colorScheme="danger">
              Delete Customer
            </Button>;
    }}>
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Header>Delete Customer</Popover.Header>
          <Popover.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button colorScheme="danger">Delete</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
 
    </NativeBaseProvider>
  )
}

export default CardNav