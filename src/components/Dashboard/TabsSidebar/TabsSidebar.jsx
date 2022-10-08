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
import MyProjects from "../MyProjects/MyProjects";
import BottomTab from "./BottomTab";
import { AiOutlineHome, AiOutlineLogout, AiOutlineTeam } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlineIdentification } from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import GettingStarted from "../Home/GettingStarted";
import TimeSheet from "../TimeSheet/TimeSheet";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BasicInformation from "../MyProfile/BasicInformation";
import ProjectModal from "../MyProjects/ModalProject/ProjectModal";
import Personal from "../MyProfile/Personal";
import TopBar from "../TopBar/TopBar";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../store/auth/auth.actions";

export default function TabsSidebar() {
   const [tabIndex, setTabIndex] = useState(0);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logoutAction());
      navigate("/");
   };

   return (
      <>
         <Tabs
            variant="soft-rounded"
            colorScheme="green"
            minH="100vh"
            defaultIndex={3}
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
               borderRight="1px solid lightgray"
               boxShadow="lg"
               bg={"white"}
               borderTopRightRadius={"xl"}
            >
               <VStack>
                  <Tab
                     mb={4}
                     gap={2}
                     w="100%"
                     fontSize="2xl"
                     display={{ base: "none", lg: "flex" }}
                     as={NavLink}
                     to="/"
                     justifyContent="flex-start"
                     boxShadow="md"
                  >
                     <Image
                        boxSize={34}
                        src="https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Everhour-logo.png"
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
                     display={{ base: "none", lg: "flex" }}
                     gap={3}
                     justifyContent="flex-start"
                  >
                     {" "}
                     <AiOutlineHome fontSize="26px" color="gray" />
                     Home
                  </Tab>
                  <Tab
                     bg={tabIndex === 2 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
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
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg={tabIndex === 3 ? "#d7f3e3" : "transparent"}
                     justifyContent="flex-start"
                  >
                     <BiTimeFive fontSize="26px" color="gray" /> Time
                  </Tab>
                  <Tab
                     bg={tabIndex === 4 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
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
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg={tabIndex === 5 ? "#d7f3e3" : "transparent"}
                     justifyContent="flex-start"
                  >
                     <CgBriefcase fontSize="26px" color="gray" /> Projects
                  </Tab>
                  <Tab
                     bg={tabIndex === 6 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
                  >
                     <CgBriefcase fontSize="26px" color="gray" />
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
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg={tabIndex === 7 ? "#d7f3e3" : "transparent"}
                     justifyContent="flex-start"
                  >
                     <HiOutlineIdentification fontSize="26px" color="gray" />{" "}
                     Clients
                  </Tab>
                  <Tab
                     bg={tabIndex === 8 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
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
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg={tabIndex === 9 ? "#d7f3e3" : "transparent"}
                     justifyContent="flex-start"
                  >
                     <AiOutlineTeam fontSize="26px" color="gray" /> Team
                  </Tab>
                  <Tab
                     bg={tabIndex === 10 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
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
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg={tabIndex === 11 ? "#d7f3e3" : "transparent"}
                     justifyContent="flex-start"
                  >
                     <FiPieChart fontSize="26px" color="gray" /> Profile
                  </Tab>
                  <Tab
                     bg={tabIndex === 12 ? "#d7f3e3" : "transparent"}
                     w="100%"
                     display={{ base: "block", lg: "none" }}
                  >
                     <FiPieChart fontSize="26px" color="gray" />
                  </Tab>
               </VStack>
               <Box display={{ base: "none", lg: "block" }}>
                  <BottomTab />
               </Box>
               <Box
                  p={4}
                  display={{ base: "block", lg: "none" }}
                  onClick={handleLogout}
               >
                  <AiOutlineLogout
                     size={27}
                     style={{ margin: "auto", color: "#ff5722" }}
                  />
               </Box>
            </TabList>

            <TabPanels p={2} pl="17%">
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
                  <TimeSheet />
               </TabPanel>
               <TabPanel>
                  <TopBar />
                  <TimeSheet />
               </TabPanel>

               <TabPanel>
                  <MyProjects />
                  <ProjectModal />
               </TabPanel>
               <TabPanel>
                  <MyProjects />
                  <ProjectModal />
               </TabPanel>

               <TabPanel>Under construction!</TabPanel>
               <TabPanel>Under construction!</TabPanel>

               <TabPanel>Under construction!</TabPanel>
               <TabPanel>Under construction!</TabPanel>

               <TabPanel>
                  <BasicInformation />
                  <Personal />
               </TabPanel>
               <TabPanel>
                  <BasicInformation />
                  <Personal />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </>
   );
}
