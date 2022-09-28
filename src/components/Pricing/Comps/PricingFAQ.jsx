import React from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import "../Pricing.module.css";

const PricingFAQ = () => {
  return (
    <Flex
    w="80%"
    m="auto"
    alignItems="center"
    justifyContent="space-around"
    gap="70px"
  >
    <Box className="Left_side">
      <Text fontSize="4xl">Your questions. Answered!</Text>
      <Text>
        Here is a list of the most frequently asked questions. Got <br />
        others or some ideas? — Contact us!
      </Text>
      <Box w="435px" h="435px">
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq@2x.webp"
          alt=""
        />
      </Box>
    </Box>
    <Box className="accordian_temp">
      <Box className="tobeShown">
      <Text fontSize="4xl">Your questions. Answered!</Text>
      </Box>
      <Accordion allowToggle>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  What's the trial period purpose?
                </Text>
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
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  What means 'Starting at x users'?
                </Text>
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
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px"> Can I change my plan later?</Text>
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
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  Can I add or remove members at any time?
                </Text>
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
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  What if I want to cancel my service?
                </Text>
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
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  What kind of payment methods do you accept?
                </Text>
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
        <AccordionItem p="5px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  Which currency will I be charged in?
                </Text>
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
  )
}

export default PricingFAQ
