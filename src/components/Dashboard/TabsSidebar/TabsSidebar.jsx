import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DashNav from "../DashNav";
import Myprojects from "../MyProjects/MyProjects`";
// import Tabs from "./Tabs";

export default function TabsSidebar() {
  return (
    <Tabs display="flex">
      <TabList
        flexDir="column"
        border="1px solid red"
        h="100vh"
        w="13%"
        position="fixed"
        bg="#f9f9f9"
      >
        <Tab>Home</Tab>
        <Tab>Time</Tab>
        <Tab>Projects</Tab>
        <Tab>Clients</Tab>
        <Tab>Team</Tab>
        <Tab>Reports</Tab>
      </TabList>

      <TabPanels
        border="3px solid blue"
        w="85%"
        h="200vh"
        justifyContent="flex-end"
      >
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel border="1px solid red" w="85%" position="relative" left="15%">
          <DashNav />
        </TabPanel>
        <TabPanel border="1px solid red" w="85%" position="relative" left="15%">
          <Myprojects />
        </TabPanel>
        <TabPanel>
          <p>ee!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
