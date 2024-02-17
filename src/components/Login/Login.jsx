import {
    Box,
    Link,
    Flex,
    VStack,
    HStack,
    Text,
    Input,
    Grid,
    Button,
    GridItem
} from "@chakra-ui/react";
import React from "react";

import { HospitalSVG } from "../../resources/svg/Hospital";
import { FaBold } from "react-icons/fa";
const Login = () => {
    return (
        <>
            
                <Grid templateColumns={"repeat(2,1fr)"} >
                    <GridItem bgColor={"whitesmoke"} borderTopLeftRadius={30}style={{borderRight:'2px solid white'}} borderBottomLeftRadius={30} fontSize={45} h={560} mt={220} ml={470} color={"navy"}>
                        <Box mt={120} p={15}>
                            <Text fontWeight={60}>
                                A Hospital
                                <Text fontWeight={"bold"}>Bed Is A Parked Taxi</Text>
                                <Text>With A Meter Runnig</Text>
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        p={18}
                        borderBottomRightRadius={30}
                        borderTopRightRadius={30}
                        w={480}
                        mt={"220"}
                        left={"950"}
                        alignItems="left"
                        textAlign={"left"}
                        justifyContent="left"
                        bgColor={"whitesmoke"}
                        filter="opacity(50)"
                    >
                        <Flex>
                            <Box
                                alignItems="left"
                                justifyContent={"left"}
                                display={"flex"}
                                flexDirection={"column"}
                                p={10}
                            >
                                <HStack>
                                    <HospitalSVG
                                        style={{ transform: "scale(0.5)" }}
                                        width="128"
                                        height="128"
                                    />
                                

                                    
                                        <HStack><Text  fontWeight={'Bold'} fontSize={"25"}>HealtH </Text><Box fontSize={"25"} bgColor={"navy"} p={2} borderRadius={5} color={"white"} fontWeight={'Bold'} mr={50} >HuB</Box></HStack>
                                    
                                
                                </HStack>
                                <Text  fontSize={20}  p={1}>
                                    Welcome to Hospital HealtH HuB
                                </Text>
                                <Box mt={"10"}>
                                    <VStack>
                                        <form>
                                            <VStack>
                                                <Input
                                                    w={320}
                                                    type="email"
                                                    placeholder="Email Address"
                                                ></Input>

                                                <Input
                                                    type="password"
                                                    placeholder="Password"
                                                ></Input>
                                                <Button mt={7}  bgColor={"navy"} type='button' color={"white"} >Submit</Button>
                                            </VStack>
                                        </form>
                                        <Box justifyContent={"left"} mt={"10"}>
                                            <Text>
                                                Not a user Sign In ?{" "}
                                                <Link color={"blue"} href="#Register">
                                                    Register
                                                </Link>
                                            </Text>
                                        </Box>
                                    </VStack>
                                </Box>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            
        </>
    );
};

export default Login;
