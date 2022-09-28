import {
    Box,
    Center,
    List,
    ListItem,
    useColorModeValue,
    Flex,
    Link,
    Image
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import icon2 from "../Images/green.png"
import icon3 from "../Images/dot.png"

import React from "react";
import Icons from "../Icons/Icons";
import styles from "../demo.module.css";

export default function DemoMidSec() {
    return (
        <Center py={6} mt="8rem">
            <Box className={styles.icon2} > <Image src={icon2} /> </Box>
            <Box className={styles.icon3} > <Image src={icon3} /> </Box>
            <Box
                maxW="lg"
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                p="1rem"
                border="1px solid transparent"
                _hover={{
                    border: "1px solid rgba(57,201,126,0.3)",
                    transition: "0.5s",
                    cursor: "pointer",
                    transform: "scale(1)",
                }}
            >
                <Box px={6} py={10} alignContent="flex-start" textAlign="left">
                    <chakra.h1
                        ml="2rem"
                        textAlign="left"
                        fontSize="1.375rem"
                        mb="1rem"
                        fontWeight="500"
                    >
                        What you’ll learn
                    </chakra.h1>
                    <List spacing={3} color="#7C7C7C" fontSize="1rem">
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    We’ll briefly explain what’s so special about Everhour.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    We’ll teach you the basics of using the app, with plenty of
                                    time for questions.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    We’ll answer all questions about setting up Everhour, using it
                                    with your team, or anything else you’d like to ask.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                    </List>
                    <chakra.h1
                        ml="2rem"
                        mt="3rem"
                        mb="2rem"
                        textAlign="left"
                        fontSize="1.375rem"
                        fontWeight="500"
                    >
                        Other information
                    </chakra.h1>
                    <List spacing={3} color="#7C7C7C" fontSize="1rem">
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    Screenshare is done in the browser by means of Whereby
                                    software using <Link color="blue.500" href="https://whereby.com/everhour">this link.</Link>  Please ensure that your mic and
                                    speakers work in advance!
                                </chakra.span>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    Demos typically last 30 minutes, but we will adjust the time
                                    based on your needs.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    Feel free to invite other team members to join this call.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex>
                                {" "}
                                <Icons />
                                <chakra.span>
                                    No available time slots? <Link color="blue.500" href="mailto:ask@everhour.com" >Contact us</Link>  and we'll surely work
                                    something out.
                                </chakra.span>
                            </Flex>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Center>
    );
}
