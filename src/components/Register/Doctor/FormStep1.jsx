import { Box, VStack,Flex, Input,Text, Stack, InputGroup, InputLeftAddon, Radio,Image, RadioGroup, Grid, SimpleGrid, HStack } from '@chakra-ui/react'
import React from 'react'
import { AspectRatio } from '@chakra-ui/react'

export const FormStep1 = () => {
    const inputStyle = {
        width:'370px',
        marginTop:'20px',
    }
    const textStyle = {
        fontSize:'18px',
        width:'370px',
        marginTop:'20px',
    }
    const marginAll = {
        borderRadius:'50px',
        margin:'150px 70px 50px auto',
    }
    const radioStyle = {
        
        marginRight:'8px',
    }
    return (
            <HStack mt={240} ml={520} spacing={20} >
                <Box  mr={220} mb={40}>
                    
                    <AspectRatio w='330px' ratio={3 / 5}>
  <Image src='doctor.jpg' alt='naruto' objectFit='cover' />
</AspectRatio>

                </Box>

            <Box  bgColor={'whitesmoke'} mb={160} p={25} w={'fit-content'}   >
                <VStack>
                    <Box  >
                        <Text {...textStyle} >Name</Text>
                        <Input {...inputStyle} type='text' placeholder='Name'></Input>
                        <Text mb={'4'} {...textStyle} >Phone No.</Text>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftAddon>
                                    +91
                                </InputLeftAddon>
                                <Input  type='tel' placeholder='phone number' />
                            </InputGroup>
                        </Stack>
                        <Text {...textStyle} >Email Id </Text>
                        <Input {...inputStyle} type='email' placeholder='email id' ></Input>
                        <Text {...textStyle} mb={'4'} >Gender</Text>
                        <RadioGroup  name='rButton'>
                            <Radio {...radioStyle} value='male'>Male</Radio>
                            <Radio {...radioStyle} value='female'>Female</Radio>
                            <Radio {...radioStyle} value='others'>Others</Radio>
                        </RadioGroup>
                        <Text {...textStyle} >Password</Text>
                        <Input {...inputStyle} type='password' placeholder={'enter password'} ></Input>
                    </Box>
                </VStack>
            </Box>
            </HStack>        
       
    )
}
