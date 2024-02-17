import {
    Box,
    VStack,
    Input,
    Text,
    Stack,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const FormStep1 = () => {
    const [phoneNumber, setphoneNumber] = useState();
    const [name, setname] = useState("");

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
        <Box>
            <Box>
                <VStack>
                    <Box>
                        <Text>Name</Text>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleInputChange}
                        ></Input>
                        <Text>Phone No.</Text>
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
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
};
