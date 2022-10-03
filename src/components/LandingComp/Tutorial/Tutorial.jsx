import { Box, chakra, HStack, Image, Link } from "@chakra-ui/react";
import {
  SiAsana,
  SiClickup,
  SiGithub,
  SiJirasoftware,
  SiNotion,
  SiTrello,
} from "react-icons/si";
import { ImBasecamp } from "react-icons/im";
import { CgMonday } from "react-icons/cg";
import CaptionCarousel from "./Carousel";
import dotIcon from "../../Demo/Images/dot.png";

export default function Tutorial() {
  return (
    <Box my={20}>
      <Box pos="absolute" zIndex="-10">
        <Image src={dotIcon} />
      </Box>
      <Box
        textAlign={{
          lg: "center",
        }}
      >
        <chakra.p
          m="auto"
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          lineHeight={1.2}
          fontWeight="medium"
          color="BlackAlpha.700"
          w={{ base: "90%", xl: "40%" }}
        >
          Track time and watch progress inside{" "}
          <Link color={"#57ba72"}>two dozen</Link> popular apps
        </chakra.p>
        <HStack
          my={14}
          maxW="5xl"
          fontSize={"22px"}
          mx={{
            lg: "auto",
          }}
          display={{ base: "none", md: "flex" }}
          color={"blackAlpha.700"}
          justifyContent="space-between"
        >
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiAsana color="#f76687" />
            Asana
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiTrello color="royalblue" />
            Trello
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <ImBasecamp color="green" />
            Basecamp
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiJirasoftware color="dodgerblue" />
            Jira
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiGithub />
            Github
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiClickup color="tomato" />
            ClickUp
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <CgMonday color="orange" />
            Monday
          </Link>
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={1}
            style={{ textDecoration: "none" }}
            _hover={{ color: "green" }}
          >
            <SiNotion />
            Notion
          </Link>
        </HStack>
      </Box>
      <Box mt={20}>
        <CaptionCarousel />
      </Box>
    </Box>
  );
}
