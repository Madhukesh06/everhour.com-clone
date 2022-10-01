import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tooltip,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiFillPlayCircle, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { MdDelete, MdFavorite } from "react-icons/md";
import { BsStopCircle } from "react-icons/bs";
import styles from "./TimeSheet.module.css";

const TimeSheet = () => {
  const toast = useToast();

  const [play, setPlay] = useState(true);
  const [fav, setFav] = useState(false);
  const fullDate = new Date();
  const handlefav = () => {
    setFav(!fav);
    toast({
      title: "Added To Favourties",
      description: "Task Added To Your Favorties",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Container maxW="7xl" className={styles.container}>
        <Tabs>
          <TabList gap="30px" color="green" className={styles.Flex_Title}>
            <Tab>
              <Text fontSize="20px">List</Text>
            </Tab>
            <Tab>
              <Text fontSize="20px">Timesheet</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <Box>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          This Week ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>
                                Mon
                                <br />
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Tue
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Wed
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Thu
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Fri
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Sat
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Sun
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    Design
                                    <br />
                                    ASD
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                <Box>-</Box>
                              </Th>
                            </Tr>
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    Project Management
                                    <br />
                                    <p fontSize="10px">ASD</p>
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    NO
                                    <p>ASD</p>
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Last Week ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Sep 12 - Sep 18 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Sep 5 - Sep 11 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Aug 30  - Sep 4 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Aug 25 - Aug 29 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          This Week ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>
                                Mon
                                <br />
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Tue
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Wed
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Thu
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Fri
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Sat
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex}>
                                Sun
                                <Text
                                  fontSize="10px"
                                  color="grey"
                                  fontWeight="lighter"
                                >
                                  day
                                </Text>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    Design
                                    <br />
                                    ASD
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                <Box>-</Box>
                              </Th>
                            </Tr>
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    Project Management
                                    <br />
                                    <p fontSize="10px">ASD</p>
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            <Tr className={styles.Row}>
                              <Th width={"50%"} className={styles.daysFlex}>
                                <Box
                                  display="flex"
                                  jutsifyContent="center"
                                  alignItems="center"
                                  gap="10px"
                                  fontSize="13px"
                                >
                                  <BsFillCircleFill
                                    color="#24be6a"
                                    fontSize="7px"
                                  />
                                  <Text fontWeight="500">
                                    NO
                                    <p>ASD</p>
                                  </Text>
                                  <Box className={styles.toShown}>
                                    {fav ? (
                                      <MdFavorite
                                        onClick={() => setFav(false)}
                                      />
                                    ) : (
                                      <AiOutlineStar
                                        color="grey"
                                        opacity="0.4"
                                        backgroundColor="green"
                                        onClick={handlefav}
                                      />
                                    )}
                                    {play ? (
                                      <AiFillPlayCircle
                                        onClick={() => setPlay(false)}
                                      />
                                    ) : (
                                      <BsStopCircle
                                        onClick={() => setPlay(true)}
                                        style={{ color: "red" }}
                                      />
                                    )}
                                  </Box>
                                  <MdDelete className={styles.delIcon} />
                                </Box>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex}>
                                <Tooltip label="Your Text" placement="top">
                                  <Box className={styles.timeDiv}>-</Box>
                                </Tooltip>
                              </Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Last Week ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Sep 12 - Sep 18 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle className={styles.Accordian_temp}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          p="5px"
                          fontSize="25px"
                          color="grey"
                        >
                          Sep 5 - Sep 11 ....0h
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table variant="simple">
                          <Thead backgroundColor="#fafafa">
                            <Tr>
                              <Th width={"50%"} className={styles.daysFlex}>
                                Tasks
                              </Th>
                              <Th className={styles.daysFlex}>Mon</Th>
                              <Th className={styles.daysFlex}>Tue</Th>
                              <Th className={styles.daysFlex}>Wed</Th>
                              <Th className={styles.daysFlex}>Thu</Th>
                              <Th className={styles.daysFlex}>Fri</Th>
                              <Th className={styles.daysFlex}>Sat</Th>
                              <Th className={styles.daysFlex}>Sun</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                Total
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th
                                width={"50%"}
                                className={styles.daysFlex}
                              ></Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex}>-</Th>
                              <Th className={styles.daysFlex} isNumeric>
                                -
                              </Th>
                            </Tr>
                            {/* Content */}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default TimeSheet;
