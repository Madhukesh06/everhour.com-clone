import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import DashNav from "../DashNav";
import Myprojects from "../MyProjects/MyProjects";
import BottomTab from "./BottomTab";

import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import GettingStarted from "../Home/GettingStarted";
import TimeSheet from "../TimeSheet/TimeSheet";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BasicInformation from "../MyProfile/BasicInformation";
import ProjectModal from "../MyProjects/ModalProject/ProjectModal";
import Personal from "../MyProfile/Personal";
import TopBar from "../TopBar/TopBar";
// import Tabs from "./Tabs";

export default function TabsSidebar() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        // isLazy
        h="100vh"
        defaultIndex={3}
        // display="flex"
        bg="whitesmoke"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList
          flexDir="column"
          p={{ base: 0, md: 4 }}
          h="100%"
          w="16%"
          position="fixed"
          justifyContent="space-between"
          boxShadow="lg"
          borderRight="1px solid whitesmoke"
        >
          <VStack>
            <Tab
              mb={4}
              gap={3}
              w="100%"
              fontSize="xl"
              display={{ base: "none", md: "flex" }}
              as={NavLink}
              to="/"
              justifyContent="flex-start"
            >
              <Image
                src="https://app.everhour.com/assets/img/everhour_48.svg"
                w="30px"
              />{" "}
              Everhour
            </Tab>

            <Tab
              fontSize={"lg"}
              bg={tabIndex === 1 ? "#d7f3e3" : "transparent"}
              transition="0.2s ease-out"
              _hover={{
                background: { tabIndex: 1 ? "#d7f3e3" : "#d7f3e3" },
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              display={{ base: "none", md: "flex" }}
              gap={2}
              justifyContent="flex-start"
            >
              {" "}
              <AiOutlineHome fontSize="26px" color="gray" />
              Home
            </Tab>
            <Tab
              bg={tabIndex === 2 ? "#d7f3e3" : "transparent"}
              w="100%"
              display={{ base: "block", md: "none" }}
            >
              {" "}
              <AiOutlineHome fontSize="26px" color="gray" />
            </Tab>

            <Tab
              fontSize={"lg"}
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 3 ? "#d7f3e3" : "transparent"}
              justifyContent="flex-start"
            >
              <BiTimeFive fontSize="26px" color="gray" /> Time
            </Tab>
            <Tab
              bg={tabIndex === 4 ? "#d7f3e3" : "transparent"}
              w="100%"
              gap={2}
              display={{ base: "block", md: "none" }}
            >
              <BiTimeFive fontSize="26px" color="gray" />
            </Tab>

            <Tab
              fontSize={"lg"}
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 5 ? "#d7f3e3" : "transparent"}
              justifyContent="flex-start"
            >
              <BsBriefcase fontSize="26px" color="gray" /> Projects
            </Tab>
            <Tab
              bg={tabIndex === 6 ? "#d7f3e3" : "transparent"}
              w="100%"
              gap={2}
              display={{ base: "block", md: "none" }}
            >
              <BsBriefcase fontSize="26px" color="gray" />
            </Tab>

            <Tab
              fontSize={"lg"}
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 7 ? "#d7f3e3" : "transparent"}
              justifyContent="flex-start"
            >
              <HiOutlineIdentification fontSize="26px" color="gray" /> Clients
            </Tab>
            <Tab
              bg={tabIndex === 8 ? "#d7f3e3" : "transparent"}
              w="100%"
              gap={2}
              display={{ base: "block", md: "none" }}
            >
              <HiOutlineIdentification fontSize="26px" color="gray" />
            </Tab>

            <Tab
              fontSize={"lg"}
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 9 ? "#d7f3e3" : "transparent"}
              justifyContent="flex-start"
            >
              <AiOutlineTeam fontSize="26px" color="gray" /> Team
            </Tab>
            <Tab
              bg={tabIndex === 10 ? "#d7f3e3" : "transparent"}
              w="100%"
              gap={2}
              display={{ base: "block", md: "none" }}
            >
              <AiOutlineTeam fontSize="26px" color="gray" />
            </Tab>

            <Tab
              fontSize={"lg"}
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 11 ? "#d7f3e3" : "transparent"}
              justifyContent="flex-start"
            >
              <FiPieChart fontSize="26px" color="gray" /> Profile
            </Tab>
            <Tab
              bg={tabIndex === 12 ? "#d7f3e3" : "transparent"}
              w="100%"
              gap={2}
              display={{ base: "block", md: "none" }}
            >
              <FiPieChart fontSize="26px" color="gray" />
            </Tab>
          </VStack>
          <BottomTab />
        </TabList>

        <TabPanels
          // h="100vh"
          p={2}
          pl="17%"
          // justifyContent="flex-end"
        >
          <TabPanel ml={"-7%"}>
            <p>Welcome to the Everhour dashboard!</p>
          </TabPanel>

          <TabPanel>
            <GettingStarted />
          </TabPanel>
          <TabPanel>
            <GettingStarted />
          </TabPanel>

          <TabPanel>
            <TopBar />
            {/* <DashNav />
            <TimeSheet /> */}
          </TabPanel>
          <TabPanel>
            <TopBar />
            {/* <DashNav />
            <TimeSheet /> */}
          </TabPanel>

          <TabPanel w="85%" position="relative" left="15%">
            <Myprojects />
            <ProjectModal />
          </TabPanel>
          <TabPanel w="85%" position="relative" left="15%">
            <Myprojects />
          </TabPanel>

          <TabPanel>
            <p>ee!</p>
          </TabPanel>
          <TabPanel>
            <p>ee!</p>
          </TabPanel>

          <TabPanel>
            <p>ee!</p>
          </TabPanel>
          <TabPanel>
            <p>ee!</p>
          </TabPanel>

          <TabPanel w="85%" position="relative" left="15%">
            <BasicInformation />
            <Personal />
          </TabPanel>
          <TabPanel>
            <BasicInformation />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
