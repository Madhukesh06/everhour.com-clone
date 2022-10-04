import { Flex } from "@chakra-ui/react";
import ButtonSec from "./ButtonSec";
import LeftInput from "./LeftInput";
import MidSec from "./MidSec";

export default function TopBar() {
  return (
    <Flex
      border={{ base: "0", md: "1px solid lightgray" }}
      direction={{ base: "column", md: "row" }}
      w="100%"
      m="auto"
      mt="1rem"
      justify={{ base: "center" }}
      align="center"
      padding={{ base: "0.5rem", md: "0" }}
      bg={"white"}
    >
      <LeftInput />
      <MidSec />
      <ButtonSec />
    </Flex>
  );
}
