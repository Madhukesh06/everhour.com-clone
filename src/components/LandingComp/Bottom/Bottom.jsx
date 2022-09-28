import {
    Box,
    Heading,
    HStack,
    ListItem,
    Text,
    UnorderedList,
    VStack
  } from "@chakra-ui/react";
  import BottomHero from "../Hero/BottomHero";
  import styles from './Bottom.module.css'
  
  export default function Bottom() {
    return (
      <HStack
        w={{ base: "100%", xl: "80%" }}
        m="auto"
        mt="50px"
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack
          w={{ base: "100%", md: "50%", xl: "70%" }}
          spacing={10}
          alignItems="flex-start"
          pl={6}
        >
          <VStack textAlign="left" spacing={5} alignItems="flex-start">
            <Heading fontSize="38px" fontWeight="500" color="#333333">
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
  
        <VStack w={{ base: "90%", md: "50%", xl: "30%" }}>
          <UnorderedList fontSize="20px" spacing={-1}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </VStack>
      </HStack>
    );
  }
  