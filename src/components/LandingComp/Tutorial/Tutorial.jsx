import { Box, chakra, HStack, Icon, Link } from "@chakra-ui/react";
import {
  SiAsana,
  SiClickup,
  SiGithub,
  SiJirasoftware,
  SiNotion,
  SiTrello
} from "react-icons/si";
import { ImBasecamp } from "react-icons/im";
import { CgMonday } from "react-icons/cg";
import CaptionCarousel from "./Carousel";
// import Carousel from "./Carousel";

export default function Tutorial() {
  return (
    <Box mt="40px">
      <Box
        textAlign={{
          lg: "center"
        }}
      >
        <chakra.p
          m="auto"
          mt={2}
          fontSize={{
            base: "3xl",
            sm: "4xl"
          }}
          lineHeight="8"
          fontWeight="medium"
          letterSpacing="tight"
          _light={{
            color: "gray.900"
          }}
          w={{ base: "90%", xl: "40%" }}
        >
          Track time and watch progress inside <Link> two dozen </Link> popular
          apps
        </chakra.p>
        <HStack
          mt={12}
          maxW="5xl"
          fontSize="24px"
          mx={{
            lg: "auto"
          }}
          display={{ base: "none", md: "flex" }}
          color="#333333"
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
            <SiTrello color="blue" />
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
            <SiJirasoftware color="blue" />
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
            <SiClickup />
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
            <CgMonday />
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

      <Box mt="40px">
        <CaptionCarousel />
      </Box>
    </Box>
  );
}
