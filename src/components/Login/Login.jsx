import {
    Box,
    Link,
    Flex,
    VStack,
    HStack,
    Text,
    Input,
} from "@chakra-ui/react";
import React from "react";

import { HospitalSVG } from "../../resources/svg/Hospital";
const Login = () => {
    return (
        <>
            <Box zIndex={-3}>
                <Box
                    p={15}
                    ml={330}
                    w={"fit-content"}
                    h={"fit-content"}
                    zIndex={-1}
                    position={"absolute"}
                >
                    <Flex zIndex={100}>
                        <Box fontSize={45} mt={370} ml={120} color={"navy"}>
                            <Text fontWeight={60}>
                                A Hospital
                                <Text fontWeight={"bold"}>Bed Is A Parked Taxi</Text>
                                <Text>With A Meter Runnnig</Text>
                            </Text>
                        </Box>
                        <Box
                            p={"33"}
                            position={"absolute"}
                            w={480}
                            top={"220"}
                            left={"650"}
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
                                        <Text ml={15} fontSize={"30"}>
                                            JaMa
                                        </Text>
                                    </HStack>
                                    <Text fontSize={20} mt={10} p={2}>
                                        Welcome o Hospital JaMa
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
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};
export default Login;