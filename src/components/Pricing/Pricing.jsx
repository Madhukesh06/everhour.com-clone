import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Pricing = () => {
  const [frequency, setFrequency] = useState("month");
  const [color, setColor] = useState("white");
  const Feature = (props) => {
    return (
      <>
        <Flex align="center">
          <Flex shrink={0}>
            <Icon
              boxSize={5}
              mt={1}
              mr={2}
              color="brand.500"
              _dark={{ color: "brand.300" }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </Icon>
          </Flex>
          <Box ml={4}>
            <chakra.span mt={2} color="gray.700" _dark={{ color: "gray.400" }}>
              {props.children}
            </chakra.span>
          </Box>
        </Flex>
      </>
    );
  };
  return (
    <>
      <Flex
        w="full"
        bg="#ffffff"
        _dark={{ bg: "#3e3e3e" }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Box py="64px" px="10" bg="#ffffff" _dark={{ bg: "gray.700" }}>
          <Box w="full" px={[10, , 4]} mx="auto" textAlign="center">
            <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
              Simple Pricing
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              Start with no commitment. Try everything. Subscribe when you love
              it.
            </chakra.p>
            <Flex justify="center" mx={["auto", 0]} mb={-2}>
              <Stack
                direction="row"
                justify="space-between"
                p="1"
                textAlign="center"
                rounded="md"
                bg="#f2fbf9"
                borderRadius={"80px"}
                //   _dark={{ bg: "gray.600" }}
              >
                <Button
                  colorScheme="green"
                  variant={frequency === "month" ? "solid" : "ghost"}
                  onClick={() => setFrequency("month")}
                  px={2}
                  borderRadius={"80px"}
                >
                  Monthly
                </Button>
                <Button
                  colorScheme="green"
                  variant={frequency === "year" ? "solid" : "ghost"}
                  onClick={() => setFrequency("year")}
                  px={2}
                  borderRadius={"80px"}
                >
                  Yearly
                </Button>
              </Stack>
            </Flex>
          </Box>
          {/* Box Of Pricing */}
          <Box maxW="8xl" py="20" mx="auto">
            <SimpleGrid columns={[1, , , 3]}>
              <Box
                rounded={["none", "lg"]}
                // shadow={["none", "md"]}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Box
                  bg="#d0d0d0"
                  w={"80%"}
                  h="4px"
                  m="auto"
                  marginTop="15px"
                  borderRadius="30px"
                ></Box>
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  color="gray.200"
                  _dark={{ color: "gray.600" }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="40px"
                    fontWeight="semibold"
                    color="gray.700"
                    _dark={{ color: "gray.400" }}
                  >
                    Free
                  </chakra.p>
                  <Text color={"grey"} marginTop={"20px"}>
                    Simple time tracking and reporting for freelancers and small
                    teams.
                  </Text>
                  <Text
                    mb={2}
                    fontSize="5xl"
                    fontWeight={"500"}
                    lineHeight="tight"
                    color="#57bb71"
                    marginTop={"20px"}
                  >
                    ${frequency === "month" ? 0 : 0}
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="500"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                    >
                      {" "}
                      /{frequency}
                    </chakra.span>
                  </Text>
                  <Text color="grey">Free Upto 5 Users</Text>
                  <Link
                    w={["half", , "75%"]}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="500"
                    rounded="md"
                    shadow="md"
                    //   _light={{ color: "white" }}
                    color="white"
                    bg="#57bb71"
                    _dark={{ bg: "brand.500" }}
                    _hover={{
                      boxShadow:
                        "rgba(123, 213, 133, 0.684) 0px 25px 50px -12px",
                      bg: "#57bb71",
                    }}
                    marginTop={"40px"}
                  >
                    Get started
                  </Link>
                </Flex>
                <Stack direction="column" p="6" spacing="3" flexGrow="1">
                  <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics</Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                </Stack>
              </Box>

              <Box
                rounded={["none", "lg"]}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Box
                  bg="#93cbee"
                  w={"80%"}
                  h="4px"
                  m="auto"
                  marginTop="15px"
                  borderRadius="30px"
                ></Box>
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  // borderRightWidth="1px"
                  color="gray.200"
                  _dark={{ color: "gray.600" }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="40px"
                    fontWeight="semibold"
                    color="gray.700"
                    _dark={{ color: "gray.400" }}
                  >
                    Lite
                  </chakra.p>
                  <Text color={"grey"} marginTop={"20px"}>
                    More control, more features yet at a very affordable price.
                  </Text>
                  <Text
                    mb={2}
                    fontSize="5xl"
                    lineHeight="tight"
                    color="#57bb71"
                    fontWeight={"500"}
                    marginTop={"20px"}
                  >
                    ${frequency === "month" ? 9 : 89}
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="medium"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                    >
                      {" "}
                      /{frequency}
                    </chakra.span>
                  </Text>
                  <Text color="grey">/ user / month, starting at 2 users</Text>
                  <Link
                    w={["full", , "75%"]}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="500"
                    rounded="md"
                    shadow="md"
                    color="white"
                    bg="#57bb71"
                    _dark={{ bg: "gray.600" }}
                    _hover={{
                      boxShadow:
                        "rgba(123, 213, 133, 0.684) 0px 25px 50px -12px",
                      bg: "#57bb71",
                      // _dark: { bg: "gray.700" },
                    }}
                    marginTop={"40px"}
                  >
                    Get Started
                  </Link>
                </Flex>
                <Stack
                  direction="column"
                  p="6"
                  spacing="2"
                  flexGrow="1"
                  fontSize={"15px"}
                >
                  <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics</Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                  <Feature>5 Days of Log Retention</Feature>
                  <Feature>Limited 24/7 Ticket Support</Feature>
                  <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                  <Feature>1,000 Email Address Validations</Feature>
                </Stack>
              </Box>

              <Box
                rounded={["none", "lg"]}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Box
                  bg="#8eddb2"
                  w={"80%"}
                  h="4px"
                  m="auto"
                  marginTop="15px"
                  borderRadius="30px"
                ></Box>
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  // borderBottomWidth="1px"
                  color="gray.200"
                  _dark={{ color: "gray.600" }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="40px"
                    fontWeight="semibold"
                    color="gray.700"
                    _dark={{ color: "gray.400" }}
                  >
                    Team
                  </chakra.p>
                  <Text color={"grey"} marginTop={"20px"}>
                    For teams and companies that need all features, plus
                    best-in-class integrations.
                  </Text>
                  <Text
                    mb={2}
                    fontSize="5xl"
                    _dark={{ color: "gray.50" }}
                    color="#57bb71"
                    fontWeight={"500"}
                    marginTop={"20px"}
                  >
                    ${frequency === "month" ? 21 : 189}
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="medium"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                    >
                      {" "}
                      /{frequency}
                    </chakra.span>
                  </Text>
                  <Text color="grey">/ user / month, starting at 5 users</Text>
                  <Link
                    w={["full", , "75%"]}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="500"
                    rounded="md"
                    shadow="md"
                    color="white"
                    bg="#57bb71"
                    _dark={{ bg: "gray.600" }}
                    _hover={{
                      boxShadow:
                        "rgba(123, 213, 133, 0.684) 0px 25px 50px -12px",
                      bg: "#57bb71",
                    }}
                    marginTop={"40px"}
                  >
                    Get Started
                  </Link>
                </Flex>
                <Stack direction="column" p="6" spacing="3" flexGrow="1">
                  <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                  <Feature>Suppression Management</Feature>
                  <Feature>Email Tracking and Analytics</Feature>
                  <Feature>99.99% Guaranteed Uptime SLA</Feature>
                  <Feature>5 Days of Log Retention</Feature>
                  <Feature>Limited 24/7 Ticket Support</Feature>
                  <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                  <Feature>1,000 Email Address Validations</Feature>
                  <Feature>Instant Chat Support</Feature>
                  <Feature>Custom Features</Feature>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>

      {/* Second Phase */}
      <Flex w="80%" m="auto" alignItems="center" justifyContent="space-around" gap="70px">
        <Box>
          <Text fontSize='4xl'>
              Your questions. Answered!
          </Text>
          <Text>
            Here is a list of the most frequently asked questions. Got <br/>
            others or some ideas? — Contact us!
          </Text>
          <Box w="435px" h="435px">
          <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq@2x.webp" alt="" />
          </Box>
        </Box>
        <Box w="40%">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                What's the trial period purpose?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                Which currency will I be charged in?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem p="7px">
            <h1>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="2xl"> Which currency will I be charged in?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Pricing;
