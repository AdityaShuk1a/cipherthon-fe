import { Box, VStack, Input,Form,Text, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'

export const FormStep1 = () => {
    const [phoneNumber, setphoneNumber] = useState();
    function handleInputChange(e){

    }
    return (
        <Box>
            <Box>
                {/* <Header>
                    <Text>Doctor Login</Text>
                </Header> */}
                <VStack>
                    <Form>
                        <Text>Name</Text>
                        <Input type='text' placeholder='Name'
                        >
                        </Input>
                        <Text>Phone No.</Text>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftAddon>
                                    +91
                                </InputLeftAddon>
                                <Input onChange={handleInputChange} type='number' placeholder='phone number' value={phoneNumber}/>
                            </InputGroup>

                        </Stack>
                    </Form>
                </VStack>
            </Box>
        </Box>
    )
}
