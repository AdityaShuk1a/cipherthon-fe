import { Box, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'






export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const menuItems=
  {fontSize:'18',color:'blue',}
  const [placement] = React.useState('left')
  return (
    <>
  <Box display={'Flex'} p={3} justifyContent={'space-between'} zIndex={20} >
    <Box>
      <Button ml={3} colorScheme='blue' borderRadius={50} onClick={onOpen} >
      <FiAlignJustify/>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <HStack>
            <DrawerHeader borderBottomWidth='1px'>
              <HStack  >
                <Text  >
              Menu</Text>
              <Button ml={160} onClick={onClose}>
                <FiX/>
              </Button>
                </HStack>
                </DrawerHeader>
            </HStack>
          <DrawerBody>
            <Text {...menuItems} >dkfksnd</Text>
            <Text></Text>
            <Text></Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    <Box>
      <Button mr={3} colorScheme='blue' >

      </Button>
    </Box>
    </Box>
  
    
    </>
  )
 
  
}
