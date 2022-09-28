import React from "react";
import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    GridItem,
    Input,
    Button,
    Icon,
    Link,
    Center,
    Image,
} from "@chakra-ui/react";

import styles from "../demo.module.css";
import image from "../Images/google-logo.png";
import icon4 from "../Images/green-oval.png"
import icon5 from "../Images/rectangle.png"

export default function DemoBottomSec() {
    const Feature = (props) => (
        <Flex alignItems="center" color={null} _dark={{ color: "white" }}>

            <Icon
                boxSize={4}
                mr={1}
                color="green.600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            {props.children}
        </Flex>
    );
    return (
        <>
            <Box className={styles.icon4} > <Image src={icon4} /> </Box>
            <Box className={styles.icon5} > <Image src={icon5} /> </Box>
            <Box px={4} py={32} mx="auto" maxW="7xl">

                <Box
                    w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                    textAlign={{ base: "left", md: "center" }}
                    mx="auto"
                >
                    <chakra.h1
                        mb={3}
                        fontSize="2.25rem"
                        fontWeight="500"
                        color="#333"
                        lineHeight="1.22"
                    >
                        Skip the demo and try for yourself?
                    </chakra.h1>
                    <chakra.p
                        mb={6}
                        fontSize={{ base: "lg", md: "xl" }}
                        color="gray.500"
                        lineHeight="1.22"
                    >
                        Try Everhour for free to see if it works for your business. No
                        credit card required. No obligations
                    </chakra.p>
                    <SimpleGrid
                        as="form"
                        w={{ base: "full", md: 7 / 12 }}
                        columns={{ base: 1, lg: 6 }}
                        spacing={3}
                        pt={1}
                        mx="auto"
                        mb={8}
                    >
                        <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
                            {/* <VisuallyHidden></VisuallyHidden> */}
                            <Input
                                mt={0}
                                size="lg"
                                type="email"
                                placeholder="Work email..."
                                required
                            />
                        </GridItem>
                        <Button
                            as={GridItem}
                            w="full"
                            colSpan={{ base: "auto", lg: 2 }}
                            size="lg"
                            type="submit"
                            backgroundColor="#57bb71"
                            cursor="pointer"
                            color="white"
                            _hover={{ backgroundColor: "#3aca7f", transition: "0.5sec" }}
                        >
                            Try it free
                        </Button>
                    </SimpleGrid>
                </Box>
                <Link
                    href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=958866595674-p0c2it7hs162uect120dmoev1innnlf0.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgoogle%2Fauthorize&state=%7B%22user%22%3Anull%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Feverhour.com%5C%2Frequest-a-demo%3Fstate%3Dsignup%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%22%2C%22isSignIn%22%3Anull%7D&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account&flowName=GeneralOAuthFlow"
                    target="_blank"
                >
                    <Center>
                        <img className={styles.icon1} alt="google" src={image} />
                        <p>Or sign up with Google Account</p>
                    </Center>
                </Link>
            </Box>

        </>
    );
}
