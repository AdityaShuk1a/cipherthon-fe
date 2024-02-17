import {
    Box,
    VStack,
    Input,
    Text,
    Stack,
    InputGroup,
    InputLeftAddon,
    Flex,
    Radio,
    Image,
    RadioGroup,
    Grid,
    Button,
    SimpleGrid,
    HStack,
    Center,
    Heading,
    useFocusEffect,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AspectRatio } from "@chakra-ui/react";

export const FormStep1 = () => {
    const [phoneNumber, setphoneNumber] = useState();
    const [name, setname] = useState("");
    const [selectedGender, setSelectedGender] = useState(null);
    const [password, setpassword] = useState(null);
    const [enablebtn, setenablebtn] = useState(false);
    useEffect(() => {
        if (
            isNaN(phoneNumber) ||
            name.length != 0 ||
            selectedGender != null ||
            password.length != 0
        ) {
            setenablebtn(true);
        }
    }, [phoneNumber, name, selectedGender, password]);

    const inputStyle = {
        width: "370px",
        marginTop: "20px",
    };
    const textStyle = {
        fontSize: "18px",
        width: "370px",
        marginTop: "20px",
    };
    const radioStyle = {
        marginRight: "8px",
    };

    const handleInputChange = (event) => {
        if (event.target.id == "phoneNumber") {
            const newPhoneNumber = event.target.value;
            const isValid = isNaN(newPhoneNumber);
            if (!isValid) {
                setphoneNumber(newPhoneNumber);
            }
        } else if (event.target.id == "name") {
            const newName = event.target.value;
            setname(newName);
        } else {
            const newPassword = event.target.value;
            setpassword(newPassword);
        }
    };

    const handleGenderChange = (value) => {
        setSelectedGender(value);
    };
    const submitBtn = (e) => {
        e.preventDefault();

        if (enablebtn) {
            // console.log("");
        } else {
            alert("some data is missing.");
        }
    };
    return (
        <Center h="100vh">
            <Grid
                templateColumns="repeat(2, 1fr)"
                gap={0}
                borderRadius={50}
                bgColor={"white"}
                boxShadow="lg"
                overflow="hidden"
            >
                <Box>
                    <AspectRatio w="100%" h="100%" ratio={3 / 5}>
                        <Image src="doctor.jpg" objectFit="cover" />
                    </AspectRatio>
                </Box>

                <Box bgColor={"white"} p={25} w={"fit-content"}>
                    <VStack align="stretch">
                        <Heading mb={4}>Sign Up</Heading>
                        <Box>
                            <Text {...textStyle}>Name</Text>
                            <Input
                                {...inputStyle}
                                type="text"
                                placeholder="Name"
                                id="name"
                                value={name}
                                onChange={handleInputChange}
                            ></Input>
                            <Text {...textStyle}>Phone No.</Text>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon>+91</InputLeftAddon>
                                    <Input
                                        type="tel"
                                        id="phoneNumber"
                                        placeholder="Enter your phone number"
                                        value={phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                            </Stack>
                            <Text {...textStyle}>Email Id </Text>
                            <Input
                                {...inputStyle}
                                type="email"
                                placeholder="Email id"
                            ></Input>
                            <Text {...textStyle} mb={"4"}>
                                Gender
                            </Text>
                            <RadioGroup
                                value={selectedGender}
                                onChange={handleGenderChange}
                                name="rButton"
                                id="Gender"
                            >
                                <VStack spacing={2} align="start">
                                    <Radio {...radioStyle} value="Male">
                                        Male
                                    </Radio>
                                    <Radio {...radioStyle} value="Female">
                                        Female
                                    </Radio>
                                    <Radio {...radioStyle} value="Other">
                                        Others
                                    </Radio>
                                </VStack>
                            </RadioGroup>
                            <Text {...textStyle}>Password</Text>
                            <Input
                                {...inputStyle}
                                type="password"
                                id="passoword"
                                placeholder="Enter password"
                                value={password}
                                onChange={handleInputChange}
                            ></Input>
                        </Box>
                        <Button
                            mt={4}
                            colorScheme="teal"
                            onClick={submitBtn}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </Grid>
        </Center>
    );
};
