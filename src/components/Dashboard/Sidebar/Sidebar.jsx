import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  VStack
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Tabs from "./Tabs";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import SidebarMenu from "./SidebarMenu";

export default function SideBar() {
  return (
    <Box>
      <HStack w="100%" justify="space-between">
        <Button
          // border="1px solid red"
          variant="solid"
          bg="transparent"
          leftIcon={
            <Image
              src="https://app.everhour.com/assets/img/everhour_48.svg"
              w="30px"
              // border="1px solid blue"
            />
          }
          _hover={{ bg: "none" }}
          w="140px"
          fontSize="14px"
          color="#111"
          fontWeight="600"
          pl={0}
        >
          Everhour
        </Button>

        <IconButton icon={<HamburgerIcon />} />
      </HStack>

      <VStack
        // border="1px solid red"
        w="100%"
        alignItems="flex-start"
        pl={2}
        pt="10px"
      >
        <Tabs text="Home" src={AiOutlineHome} />
        <Tabs text="Time" src={BiTimeFive} />
        <Tabs text="Projects" src={BsBriefcase} />
        <Tabs text="Clients" src={HiOutlineIdentification} />
        <Tabs text="Team" src={AiOutlineTeam} />
        <Tabs text="Reports" src={FiPieChart} />
      </VStack>
    </Box>
  );
}
