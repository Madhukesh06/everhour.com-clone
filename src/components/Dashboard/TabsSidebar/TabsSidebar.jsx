import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
import TimeSheet from "../../TimeSheet/TimeSheet";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import BasicInformation from "../MyProfile/BasicInformation";
// import Tabs from "./Tabs";

export default function TabsSidebar() {

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
      <Tabs display="flex" onChange={(index) => setTabIndex(index)}>
        <TabList
          flexDir="column"
          h="100vh"
          w="13%"
          position="fixed"
          bg="#f9f9f9"
          justifyContent="space-between"
        >
          <VStack>
            <Tab
              bg="white"
              gap={3}
              w="100%"
              fontSize="xl"
              display={{ base: "none", md: "flex" }}
              as={NavLink}
              to='/'
            >
              <Image
                src="https://app.everhour.com/assets/img/everhour_48.svg"
                w="30px"
              />{" "}
              Everhour
            </Tab>

            <Tab
              bg={tabIndex === 1 ? '#d7f3e3' : 'transparent'}
              transition="0.2s ease-out"
              _hover={{
                background:{tabIndex: 1 ? "#d7f3e3" : "#d7f3e3"},
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              display={{ base: "none", md: "flex" }}
              gap={2}
            >
              {" "}
              <AiOutlineHome fontSize="26px" color="gray" />
              Home
            </Tab>
            <Tab bg={tabIndex === 2 ? '#d7f3e3' : 'transparent'} w="100%" display={{ base: "block", md: "none" }}>
              {" "}
              <AiOutlineHome fontSize="26px" color="gray" />
            </Tab>

            <Tab
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 3 ? '#d7f3e3' : 'transparent'}
            >
              <BiTimeFive fontSize="26px" color="gray" /> Time
            </Tab>
            <Tab bg={tabIndex === 4 ? '#d7f3e3' : 'transparent'} w="100%" gap={2} display={{ base: "block", md: "none" }}>
              <BiTimeFive fontSize="26px" color="gray" />
            </Tab>

            <Tab
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 5 ? '#d7f3e3' : 'transparent'}
            >
              <BsBriefcase fontSize="26px" color="gray" /> Projects
            </Tab>
            <Tab bg={tabIndex === 6 ? '#d7f3e3' : 'transparent'} w="100%" gap={2} display={{ base: "block", md: "none" }}>
              <BsBriefcase fontSize="26px" color="gray" />
            </Tab>

            <Tab
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 7 ? '#d7f3e3' : 'transparent'}
            >
              <HiOutlineIdentification fontSize="26px" color="gray" /> Clients
            </Tab>
            <Tab bg={tabIndex === 8 ? '#d7f3e3' : 'transparent'} w="100%" gap={2} display={{ base: "block", md: "none" }}>
              <HiOutlineIdentification fontSize="26px" color="gray" />
            </Tab>

            <Tab
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 9 ? '#d7f3e3' : 'transparent'}
            >
              <AiOutlineTeam fontSize="26px" color="gray" /> Team
            </Tab>
            <Tab bg={tabIndex === 10 ? '#d7f3e3' : 'transparent'} w="100%" gap={2} display={{ base: "block", md: "none" }}>
              <AiOutlineTeam fontSize="26px" color="gray" />
            </Tab>

            <Tab
              transition="0.2s ease-out"
              _hover={{
                background: "#d7f3e3",
                opacity: "0.9",
                transition: "0.2s ease-out",
              }}
              w="100%"
              gap={2}
              display={{ base: "none", md: "flex" }}
              bg={tabIndex === 11 ? '#d7f3e3' : 'transparent'}
            >
              <FiPieChart fontSize="26px" color="gray" /> Reports
            </Tab>
            <Tab bg={tabIndex === 12 ? '#d7f3e3' : 'transparent'} w="100%" gap={2} display={{ base: "block", md: "none" }}>
              <FiPieChart fontSize="26px" color="gray" />
            </Tab>
          </VStack>
          <BottomTab />
        </TabList>

        <TabPanels w="85%" justifyContent="flex-end">
          <TabPanel>
            <p>Everhour!</p>
          </TabPanel>

          <TabPanel>
            <GettingStarted />
          </TabPanel>
          <TabPanel>
            <GettingStarted />
          </TabPanel>

          <TabPanel
            w="85%"
            position="relative"
            left="15%"
          >
            <DashNav />
            <TimeSheet />
          </TabPanel>
          <TabPanel
            border="1px solid red"
            w="85%"
            position="relative"
            left="15%"
          >
            <DashNav />
            <TimeSheet />
          </TabPanel>

          <TabPanel
            w="85%"
            position="relative"
            left="15%"
          >
            <Myprojects />
          </TabPanel>
          <TabPanel
            w="85%"
            position="relative"
            left="15%"
          >
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

          <TabPanel 
            w="85%"
            position="relative"
            left="15%">
            <BasicInformation/>
          </TabPanel>
          <TabPanel>
            <BasicInformation/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
