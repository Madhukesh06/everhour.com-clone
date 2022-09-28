import { Box, Button, HStack, Input, Link, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function BottomHero() {
  return (
    <VStack spacing={4}>
      <HStack w="100%" m="auto">
        <Input size="lg" placeholder="Work Email" outline="1px solid gray" />
        <Button
          size="lg"
          p={3}
          pr={7}
          pl={7}
          colorScheme="green"
          fontWeight="400"
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
