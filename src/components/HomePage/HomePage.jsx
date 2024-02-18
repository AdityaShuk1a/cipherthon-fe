import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Nav } from "../Nav/Nav";
import { NavLink } from "react-router-dom";
const HomePage = () => {
    const [Notifications, setNotifications] = useState(0);
    const [PatientName, setPatientName] = useState("Mitthu");
    const [numberOfHospitals, setnumberOfHospitals] = useState(69);
    const [currentHospital, setcurrentHospital] = useState("Sendha Namak");
    const [currentDoctor, setcurrentDoctor] = useState("Krishan kumar");
    const [PatientId, setPatientId] = useState();
    return (
        <>
            <Nav />
            <Box ml={150} style={{ marginTop: "5vh" }}>
                <Grid templateColumns={"repeat(3,2fr)"} gap={6} borderRadius={50}>
                    <GridItem borderRadius={20} w="75%" h="50vh" bgColor="white">
                        <Center>
                            <VStack>
                                <Heading p="1vh" size="lg">
                                    Last appointment
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>
                    <GridItem borderRadius={20} w="75%" h="50vh" bg="white">
                        <Center>
                            <VStack>
                                <Heading p="1vh" size="lg">
                                    Upcoming appointment
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>
                    <GridItem borderRadius={20} w="75%" h="50vh" bg="white">
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box></Box>
                            <Box
                                mr="1.5vh"
                                mt="1.5vh"
                                fontSize={"xl"}
                                fontWeight={"bold"}
                                color="orange.500"
                            >
                                {Notifications}
                            </Box>
                        </Box>
                        <Box>
                            <Center>
                                <Heading mt={"2vh"}>{PatientName}</Heading>
                            </Center>
                            <Text fontSize={"xl"} textAlign={"Center"}>
                                <Flex>
                                    <Heading size={"md"} ml={"1vh"} mt={"2vh"}>
                                        Current Hopital -
                                    </Heading>
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentHospital}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Heading size={"md"} ml={"1vh"} mt={"2vh"}>
                                        Current Doctor-
                                    </Heading>
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentDoctor}
                                    </Text>
                                </Flex>
                                <Center mt={"5vh"}>
                                    You data is currently being shared with{" "}
                                    {numberOfHospitals} Hospitals
                                </Center>
                            </Text>
                            <Center>
                                <NavLink
                                    to={`/manage/${PatientId}`}
                                    className="attendance"
                                >
                                    <Button colorScheme="blue">Manage</Button>
                                </NavLink>
                            </Center>
                        </Box>
                    </GridItem>
                    <GridItem borderRadius={20} w="75%" h="50vh" bg="white" />
                    <GridItem borderRadius={20} w="75%" h="50vh" bg="white" />
                    <GridItem borderRadius={20} w="75%" h="50vh" bg="white" />
                </Grid>
            </Box>
        </>
    );
};

export default HomePage;
