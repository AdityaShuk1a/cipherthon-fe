import React from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Flex,
    Text,
    IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
function Manage() {
    const [existing, setexisting] = useState([
        {
            id: 1,
            hospitalName: "Hospital A",
            additionalInfo: "Additional info for Hospital A",
        },
        {
            id: 2,
            hospitalName: "Hospital B",
            additionalInfo: "Additional info for Hospital B",
        },
        {
            id: 3,
            hospitalName: "Hospital C",
            additionalInfo: "Additional info for Hospital C",
        },
    ]);
    const [pending, setpending] = useState([]);
    return (
        <Flex h={"70vh"} w={"w-screen"}>
            <Box
                w={"50vw"}
                overflow="auto"
                m="auto"
                bgColor={"white"}
                borderRadius={"2vh"}
            >
                <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList m="1vh">
                        <Tab>Existing</Tab>
                        <Tab>Pending</Tab>
                    </TabList>

                    <TabPanels>
                        // array data maan ke chal rahe
                        {existing.map((item) => (
                            <TabPanel>
                                <Flex justifyContent="space-between" alignItems="center">
                                    <Text>{item.hospitalName}</Text>
                                    <IconButton
                                        icon={<CloseIcon />}
                                        onClick={() => handleCrossIconClick(item.id)}
                                    />
                                </Flex>
                            </TabPanel>
                        ))}
                        <TabPanel>
                            {pending.map((item) => (
                                <p> item.id</p>
                                // <Flex justifyContent="space-between" alignItems="center">
                                //     <Text>{item.hospitalName}</Text>
                                //     <IconButton
                                //         icon={<CloseIcon />}
                                //         onClick={() => handleCrossIconClick(item.id)} // Add your click handler logic here
                                //     />
                                // </Flex>
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
}

export default Manage;
