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
// import { NavLink } from "react-router-dom";
// import Tabs from "./Tabs";
// import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
// import { BiTimeFive } from "react-icons/bi";
// import { BsBriefcase } from "react-icons/bs";
// import { HiOutlineIdentification } from "react-icons/hi";
// import { FiPieChart } from "react-icons/fi";
import SideBar from "./Sidebar/Sidebar";
import SidebarMenu from "./Sidebar/SidebarMenu";
import DashNav from "./DashNav";
import { useState } from "react";

export default function Dashboard() {
  const [tab, setTab] = useState(1);

  return (
    <HStack justify="flex-end" bg="#fafafa">
      <VStack
        border="1px solid blue"
        w="13%"
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        alignItems="flex-start"
        pl={3}
        pt={5}
        justifyContent="space-between"
      >
        <SideBar />
        <SidebarMenu />
      </VStack>

      <Box w="86%" h="200vh" p={4} border="1px solid green">
        <DashNav />
      </Box>
    </HStack>
  );
}
