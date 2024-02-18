import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import { TbHeartPlus  } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Nav } from "../Nav/Nav";
import { FaUserMd } from "react-icons/fa";
import { FaHospitalSymbol } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
const HomePage = () => {
    const [Notifications, setNotifications] = useState(0);
    const [PatientName, setPatientName] = useState("Mitthu");
    const [numberOfHospitals, setnumberOfHospitals] = useState(69);
    const [currentHospital, setcurrentHospital] = useState("Sendha Namak");
    const [currentDoctor, setcurrentDoctor] = useState("Krishan kumar");
    const [PatientId, setPatientId] = useState(0)
    return (
        <>
            <Nav />
            <Box ml={150} style={{ marginTop: "5vh" }}>
                <Grid templateColumns={"repeat(3,2fr)"} gap={6} borderRadius={50}>
                    <GridItem borderRadius={20} w="75%" h="50vh" bgColor="white">
                        <Center>
                            <HStack>

                              <FaCalendarAlt style={{fontSize:'30px', marginTop:'20px'}} />
                                <Text style={{borderBottom:'2px solid black', fontSize:'30px', fontWeight:'bold', marginTop:'20px'}}   >
                                    Last appointment
                                </Text>
                            </HStack>
                        </Center>
                        <Center>
                        <VStack>

                        <Box p={4} borderRadius={10} mt={20} border={'2px solid black'} >
                          <HStack>

                          <Box borderRight={'2px solid black'} ><Text style={{fontSize:'30px'}} >26</Text></Box>
                          <Box borderRight={'2px solid black'} ><Text style={{fontSize:'30px'}} >11</Text></Box>
                          <Box  ><Text style={{fontSize:'30px'}} >09</Text></Box>
                          </HStack>
                          <Box>

                          </Box>
                          
                        </Box>
                          <Box>
                            <HStack>

                            <FaClock style={{fontSize:'30px' , marginTop:'20px'}}  />
                            <Text style={{fontSize:'20px', marginTop:'20px'}} >10:00 PM Ist</Text>
                            </HStack>

                          </Box>
                        </VStack>
                        </Center>
                        <Text mt={10} fontSize={"xl"} textAlign={"Center"}>
                                <Flex marginTop={6} marginLeft={6} >
                                    <FaHospitalSymbol style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentHospital}
                                    </Text>
                                </Flex>
                                <Flex marginTop={6} marginLeft={6}>
                                    <FaUserMd style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentDoctor}
                                    </Text>
                                </Flex>
                              </Text>
                    </GridItem>
                    <GridItem borderRadius={20} w="75%" h="50vh" bgColor="white">
                        <Center>
                            <HStack>

                              <FaCalendarAlt style={{fontSize:'30px', marginTop:'20px'}} />
                                <Text style={{borderBottom:'2px solid black', fontSize:'30px', fontWeight:'bold', marginTop:'20px'}}   >
                                    Upcoming appointment
                                </Text>
                            </HStack>
                        </Center>
                        <Center>
                        <VStack>

                        <Box p={4} borderRadius={10} mt={20} border={'2px solid black'} >
                          <HStack>

                          <Box borderRight={'2px solid black'} ><Text style={{fontSize:'30px'}} >09</Text></Box>
                          <Box borderRight={'2px solid black'} ><Text style={{fontSize:'30px'}} >11</Text></Box>
                          <Box  ><Text style={{fontSize:'30px'}} >09</Text></Box>
                          </HStack>
                          <Box>

                          </Box>
                          
                        </Box>
                          <Box>
                            <HStack>

                            <FaClock style={{fontSize:'30px' , marginTop:'20px'}}  />
                            <Text style={{fontSize:'20px', marginTop:'20px'}} >10:00 PM Ist</Text>
                            </HStack>

                          </Box>
                        </VStack>
                        </Center>
                        <Text mt={10} fontSize={"xl"} textAlign={"Center"}>
                                <Flex marginTop={6} marginLeft={6} >
                                    <FaHospitalSymbol style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentHospital}
                                    </Text>
                                </Flex>
                                <Flex marginTop={6} marginLeft={6}>
                                    <FaUserMd style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentDoctor}
                                    </Text>
                                </Flex>
                              </Text>
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
                          <Center  fontSize={25}  >
                            <TbHeartPlus  color="red" fontWeight={'bold'} borderBottom={'2px solid black'}/> <Text fontWeight={'bold'} borderBottom={'2px solid black'}>Patient card</Text>
                          </Center>
                            <Center>
                              <HStack>

                              <FaUserLarge style={{marginTop:'20px', marginRight:'20px'}} fontSize={40} />
                                <Heading mt={"2vh"}>{PatientName}</Heading>
                              </HStack>
                            </Center>
                            <Text fontSize={"xl"} textAlign={"Center"}>
                                <Flex marginTop={6} marginLeft={6} >
                                    <FaHospitalSymbol style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentHospital}
                                    </Text>
                                </Flex>
                                <Flex marginTop={6} marginLeft={6}>
                                    <FaUserMd style={{fontSize:'30px', marginTop:'18px'}} />
                                    <Text size={"md"} ml={"1vh"} mt={"1.6vh"}>
                                        {currentDoctor}
                                    </Text>
                                </Flex>
                                <Center mt={"5vh"} color={'gray.400'}> 
                                    You data is currently being shared with{" "}
                                    {numberOfHospitals} Hospitals
                                </Center>
                            </Text>
                            <Center style={{marginTop:'20px'}} >
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
