import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function BottomHero() {
  return (
    <VStack spacing={5}>
      <HStack w="100%" m="auto" spacing={4}>
        <Input
          size={{ base: "md", md: "lg" }}
          placeholder="Work Email"
          borderColor={"lightgray"}
          focusBorderColor={"#57bb72"}
          _hover={{
            borderColor: "green",
          }}
        />
        <Button
          size={{ base: "md", md: "lg" }}
          px={14}
          bg={"#57bb72"}
          color={"whitesmoke"}
          _hover={{
            bg: "#24bd6a",
          }}
        >
          Try Free
        </Button>
      </HStack>
      <Button variant="link" leftIcon={<FcGoogle />} fontWeight="400">
        Or signup with Google Account
      </Button>
    </VStack>
  );
}
