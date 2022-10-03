import { Box, chakra, Text } from "@chakra-ui/react";

export default function MidHero() {
  return (
    <Box>
      <Box
        w={{
          base: "95%",
          md: "60%",
        }}
        mx="auto"
        textAlign={{
          base: "center",
          sm: "center",
        }}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
          fontWeight="medium"
          lineHeight={1.2}
          color="blackAlpha.800"
          _dark={{
            color: "gray.100",
          }}
        >
          Powerful{" "}
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="medium"
          >
            time tracking software
          </Text>{" "}
          with hassle-free integrations.
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mt={9}
          mb={10}
          fontSize={{
            base: "lg",
            md: "xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          Accurate time tracker for budgeting, client invoicing and painless
          payroll. Works with the apps your team already use
        </chakra.p>
      </Box>
    </Box>
  );
}
