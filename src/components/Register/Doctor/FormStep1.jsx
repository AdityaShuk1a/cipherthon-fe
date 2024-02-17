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
    SimpleGrid,
    HStack,
    Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AspectRatio } from "@chakra-ui/react";

export const FormStep1 = () => {
    const [phoneNumber, setphoneNumber] = useState();
    const [name, setname] = useState("");
    const inputStyle = {
        width: "370px",
        marginTop: "20px",
    };
    const textStyle = {
        fontSize: "18px",
        width: "370px",
        marginTop: "20px",
    };
    const marginAll = {
        borderRadius: "50px",
        margin: "150px 70px 50px auto",
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
        } else {
            const newName = event.target.value;
            setname(newName);
        }
    };

    return (
        <Center h="100vh">
            <Grid
                templateColumns="repeat(2, 1fr)"
                gap={6}
                borderRadius={5}
                bgColor={"white"}
            >
                <Box>
                    <AspectRatio w="330px" ratio={3 / 5}>
                        <Image src="doctor.jpg" objectFit="cover" />
                    </AspectRatio>
                </Box>

                <Box bgColor={"white"} p={25} w={"fit-content"}>
                    <VStack>
                        <Box>
                            <Text {...textStyle}>Name</Text>
                            <Input
                                {...inputStyle}
                                type="text"
                                placeholder="Name"
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
                                placeholder="email id"
                            ></Input>
                            <Text {...textStyle} mb={"4"}>
                                Gender
                            </Text>
                            <RadioGroup name="rButton">
                                <Radio {...radioStyle} value="male">
                                    Male
                                </Radio>
                                <Radio {...radioStyle} value="female">
                                    Female
                                </Radio>
                                <Radio {...radioStyle} value="others">
                                    Others
                                </Radio>
                            </RadioGroup>
                            <Text {...textStyle}>Password</Text>
                            <Input
                                {...inputStyle}
                                type="password"
                                placeholder={"enter password"}
                            ></Input>
                        </Box>
                    </VStack>
                </Box>
            </Grid>
        </Center>
    );
};
