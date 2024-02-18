import React from "react";

import { Box, MenuItem, MenuGroup } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuDivider } from "@chakra-ui/react";

export const Nav = () => {
    return (
        <Box display={"flex"} bgColor={"white"} justifyContent={"space-between"}>
            <Box mt={3} ml={4} p={2} bgColor={"white"} borderRadius={50}>
                <FaPlus style={{ fontSize: "3vh" }} />
            </Box>
            <Box mt={3} mr={4} p={2} bgColor={"white"} borderRadius={50}>
                <Menu>
                    <MenuButton colorScheme="blue">
                        <FiUser style={{ fontSize: "3vh" }} />
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup>
                            <MenuItem>Log Out</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
};
