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
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillPlayCircle, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { MdDelete, MdFavorite } from "react-icons/md";
import { BsStopCircle } from "react-icons/bs";
import styles from "./TimeSheet.module.css";
import useTimeSheetHook from "../../../hooks/useTimeSheetHook";
import TaskInput from "../TaskInput/TaskInput";

const dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dateArray = ["", "", "", "", "", "", ""];

const TimeSheet = () => {
  const toast = useToast();
  const { hours, minutes, seconds, date, month, day } = useTimeSheetHook();
  const [play, setPlay] = useState(true);
  const [fav, setFav] = useState(false);
  const [dayArr, setDayArr] = useState(dayArray);
  const [dateArr, setDateArr] = useState(dateArray);

  const handlefav = () => {
    setFav(!fav);
    toast({
      title: "Added To Favourites",
      description: "Task Added To Your Favorites",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    let temp = dayArr.indexOf(day);
    dateArray[temp] = `${month} ${date}`;
    setDateArr(dateArray);
  }, []);

  return (
    <Container maxW="container" bg="white" mt={7} className={styles.container}>
      <Tabs isLazy defaultIndex={1}>
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
              <Accordion
                defaultIndex={[0]}
                allowToggle
                className={styles.Accordian_temp}
              >
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
                        This Week . . . . 0h
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
                              {dayArr[0]}
                              <br />
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[0]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[1]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[1]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[2]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[2]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[3]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[3]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[4]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[4]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[5]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[5]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[6]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[6]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex} isNumeric>
                              Total
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th width={"50%"} className={styles.daysFlex}></Th>
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
              <Flex w="100%">
                <TaskInput />
              </Flex>
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                          Aug 30 - Sep 4 ....0h
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
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Accordion
                defaultIndex={[0]}
                allowToggle
                className={styles.Accordian_temp}
              >
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
                        This Week . . . . 0h
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
                              {dayArr[0]}
                              <br />
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[0]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[1]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[1]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[2]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[2]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[3]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[3]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[4]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[4]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[5]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[5]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex}>
                              {dayArr[6]}
                              <Text
                                fontSize="10px"
                                color="grey"
                                fontWeight="lighter"
                              >
                                {dateArr[6]}
                              </Text>
                            </Th>
                            <Th className={styles.daysFlex} isNumeric>
                              Total
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th width={"50%"} className={styles.daysFlex}></Th>
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
                                    <MdFavorite onClick={() => setFav(false)} />
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
              <Flex w="100%">
                <TaskInput />
              </Flex>
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                            Content
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                            Content
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
              {/* <Accordion allowToggle className={styles.Accordian_temp}>
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
                            Content
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion> */}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TimeSheet;
