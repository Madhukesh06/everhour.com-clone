import {
  Box,
  Button,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import TitleComp from "./TitleComp";

const arr = [
  {
    heading: "Add integration",
    title: "Connect Everhour with your apps",
    des: "Everhour controls will natively appear inside the most popular project management tools. As the result, better accuracy & less employee teaching.",
    btn: "Connect",
  },
  {
    heading: "Install extension",
    title: "Everhour browser extension",
    des: "It injects time tracking controls inside the most popular tools as well as let you quickly access all your timekeeping data.",
    btn: "Install",
  },
  {
    heading: "First time entry",
    title: "Start tracking time",
    des: "You can track time using the timer or log time manually inside integrations, via our browser extension, via Everhour website or our iOS app.",
    btn: "Add Time",
  },
  {
    heading: "Invite your team",
    title: "Invite your teammates",
    des: "Invite your employees and contractors to start tracking time. You'll be able to set their billable and cost rates as well as permission level.",
    btn: "Invite",
  },
];

const GettingStarted = () => {
  const [num, setNum] = useState(0);

  const handleNum = (heading) => {
    if (heading === "Add integration") setNum(0);
    if (heading === "Install extension") setNum(1);
    if (heading === "First time entry") setNum(2);
    if (heading === "Invite your team") setNum(3);
  };

  return (
    <VStack
      p={7}
      pb={10}
      gap={7}
      border={1}
      borderStyle={"solid"}
      borderColor={"lightgray"}
      borderRadius={"lg"}
      bg={"white"}
      align={"left"}
    >
      <Flex justify={"left"} align={"center"} gap={2}>
        <Heading size={"lg"} fontWeight={400}>
          Getting started with Everhour
        </Heading>
        <Text color={"gray"}>(hide forever)</Text>
      </Flex>
      <Flex
        h={240}
        w={"80%"}
        m={"auto"}
        ml="25%"
        border={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        borderRadius={"sm"}
      >
        <VStack
          w={"27%"}
          h={"100%"}
          borderRight={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align="stretch"
          divider={<StackDivider borderColor="gray.200" />}
          spacing={0}
        >
          {arr.map((item) => (
            <TitleComp handleNum={handleNum}>{item.heading}</TitleComp>
          ))}
        </VStack>
        <VStack
          w={"73%"}
          boxSizing="border-box"
          py={7}
          px={10}
          align={"start"}
          justify={"center"}
          bg={"blackAlpha.50"}
          spacing={4}
        >
          <Heading size={"md"} fontWeight={"500"}>
            {arr[num].title}
          </Heading>
          <Text align={"left"} fontSize={"md"}>
            {arr[num].des}
          </Text>
          <Button
            px={7}
            bg="#24bd6a"
            color={"white"}
            fontWeight={400}
            borderRadius={"sm"}
            _hover={{
              bg: "green.400",
            }}
          >
            {arr[num].btn}
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default GettingStarted;
