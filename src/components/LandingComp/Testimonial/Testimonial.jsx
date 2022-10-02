import { Highlight, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import quote from "./icons8-get-quote-100.png";

export default function Testimonial() {
  return (
    <VStack w={{ base: "100%", xl: "80%" }} m="auto" mt="100px" px={5}>
      <VStack
        color="#333"
        fontSize={{ base: "24px", xl: "36px" }}
        fontWeight="medium"
        w="100%"
        spacing={0}
        lineHeight="short"
        textAlign={{ base: "center", lg: "left" }}
        alignItems={{ lg: "flex-start" }}
      >
        <Text w={{ lg: "50%", xl: "70%" }}>
          Everhour has helped 240,000+ people complete over 135 million tasks in
          3 million projects
        </Text>
      </VStack>

      <HStack
        justify="space-between"
        flexDir={{ base: "column-reverse", sm: "row" }}
      >
        <HStack w={{ base: "100%", sm: "50%" }}>
          <Image src={quote} display={{ base: "none", lg: "block" }} />
          <VStack fontSize="18px" textAlign="left">
            <Text>
              Everhour helps us track our engineering hours which is a
              requirement for several Government grants we have received.{" "}
              Without Everhour, we would be unable to accurately track the hours
              associated with each individual project we are working on as a
              company. The reports are easily customizable which allows me to
              extract the data I need. Everhour is a great tool for our time
              tracking needs!
            </Text>
            <Text fontWeight="semibold" w="full">
              Kelly Bonneau, CPA
            </Text>
            <Text fontWeight="semibold" w="full">
              Accounting Manager at 7shifts
            </Text>
            <Link href="#" color="blue.500" fontSize="16px" w="full">
              Read More Reviews
            </Link>
          </VStack>
        </HStack>

        <Image
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
          position={{ base: "static", lg: "relative" }}
          top="-100px"
          w={{ base: "60%", sm: "40%" }}
        />
      </HStack>
    </VStack>
  );
}
