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
import DoctorSignup from "./components/Register/DoctorSignup.jsx";
import { FormStep1 } from "./components/Register/Doctor/FormStep1.jsx";

const App = () => {
    return (
        <Box fontFamily={"unset"}>
            <FormStep1></FormStep1>
        </Box>
    );
};

export default App;
