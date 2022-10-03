import {
  Box,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import BottomHero from "../Hero/BottomHero";
import styles from "./Bottom.module.css";

export default function Bottom() {
  return (
    <HStack
      w={{ base: "100%", xl: "80%" }}
      m="auto"
      mt={30}
      mb={{ base: 30, md: 36 }}
      flexDir={{ base: "column", md: "row" }}
    >
      <VStack
        w={{ base: "100%", md: "50%", xl: "70%" }}
        spacing={10}
        alignItems="flex-start"
        pl={6}
      >
        <VStack textAlign="left" spacing={5} alignItems="flex-start">
          <Heading fontSize={"4xl"} fontWeight="500" color="blackAlpha.900">
            Take control of your time with Everhour
          </Heading>
          <Text color="#7b7b7b" fontSize="18px">
            Beautiful integrations. Intuitive interface. No unexpected fees
          </Text>
        </VStack>
        <Box w={{ base: "100%", md: "80%", xl: "70%" }}>
          <BottomHero />
        </Box>
      </VStack>

      <VStack w={{ base: "90%", md: "50%", xl: "40%" }}>
        <UnorderedList fontSize="20px" spacing={-1} textAlign="left">
          <ListItem>Track time from the apps you already use</ListItem>
          <ListItem>Know where your team’s time is going</ListItem>
          <ListItem>Keep projects on budget</ListItem>
          <ListItem>Increase transparency</ListItem>
          <ListItem>Make your workflow more efficient</ListItem>
          <ListItem>Spot burnout before it happens</ListItem>
        </UnorderedList>
      </VStack>
    </HStack>
  );
}
