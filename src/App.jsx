import {
    Box,
    Container,
    Flex,
    Image,
    Spacer,
    VStack,
    HStack,
    background,
    flexbox,
    Text,
    space,
} from "@chakra-ui/react";
import React from "react";
import { Nav } from "./components/Nav/Nav.jsx";
import { Login } from "./components/Login/Login.jsx";
import { SignUp } from "./components/Login/SignUp.jsx";
import DoctorSignup from "./components/Register/DoctorSignup.jsx";

const App = () => {
    return (
        <Box fontFamily={"unset"}>
            <Nav></Nav>
        </Box>
    );
};

export default App;
