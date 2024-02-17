import React from 'react';
import { ChakraProvider, Box, Flex, Spacer, Image, Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex p="4" bg="blue.500" color="white">
      {/* Logo on the left */}
      <Box>
        <Image src="/path/to/your/logo.png" alt="Logo" boxSize="40px" />
      </Box>

      <Spacer />

      {/* Profile icon and dropdown menu on the right */}
      <Box>
        <Menu>
          <MenuButton as={Avatar} size="sm" cursor="pointer" src="/path/to/profile/image.jpg" />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};


