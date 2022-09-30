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
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import {AiFillPlayCircle , AiOutlineStar } from "react-icons/ai"
import {BsFillCircleFill} from "react-icons/bs"
import {MdDelete} from "react-icons/md"
import {BsStopCircle} from "react-icons/bs"
import styles from "./TimeSheet.module.css";

const TimeSheet = () => {

    const [play ,setPlay] = useState(true)


  return (
    <>
      <Container
        maxW="7xl"
        className={styles.container}
      >
        <Flex width="100%" gap="30px" p="10px" className={styles.Flex_Title}>
          <Text fontSize="20px">List</Text>
          <Text fontSize="20px">Timesheet</Text>
        </Flex>

        <Box>
          <Accordion allowToggle className={styles.Accordian_temp}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" p="5px" fontSize="25px" color="grey">
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
                        <Th width={"50%"} className={styles.daysFlex}>Tasks</Th>
                        <Th className={styles.daysFlex}>
                            Mon
                        </Th>
                        <Th className={styles.daysFlex}>
                            Tue
                        </Th>
                        <Th className={styles.daysFlex}>
                            Wed
                        </Th>
                        <Th className={styles.daysFlex}>
                            Thu
                        </Th>
                        <Th className={styles.daysFlex}>
                            Fri
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sat
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sun
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Th width={"50%"} className={styles.daysFlex}></Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
                    </Tr>
                    {/* Content */}
                    <Tr className={styles.Row}>
                        <Th width={"50%"} className={styles.daysFlex}>
                            <Box display="flex" jutsifyContent="center" alignItems="center" gap="10px" fontSize="13px">
                            <BsFillCircleFill color="#24be6a" fontSize="7px"/>
                                <Text fontWeight="500">
                                     Design<br/>
                                    ASD
                                    </Text>
                                <Box className={styles.toShown}>
                                    <AiOutlineStar/>
                                    {play ? <AiFillPlayCircle onClick={()=>setPlay(false)}/> : <BsStopCircle onClick={()=>setPlay(true)} style={{color:"red"}}/>}
                                </Box>
                                <MdDelete className={styles.delIcon}/>
                            </Box>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>
                            <Box>
                                -
                            </Box>
                            </Th>
                    </Tr>
                    <Tr className={styles.Row}>
                        <Th width={"50%"} className={styles.daysFlex}>
                            <Box display="flex" jutsifyContent="center" alignItems="center" gap="10px" fontSize="13px">
                            <BsFillCircleFill color="#24be6a" fontSize="7px"/>
                                <Text fontWeight="500">
                                    Project Management<br/>
                                    <p fontSize="10px">ASD</p>
                                    </Text>
                                <Box className={styles.toShown}>
                                    <AiOutlineStar/>
                                    {play ? <AiFillPlayCircle onClick={()=>setPlay(false)}/> : <BsStopCircle onClick={()=>setPlay(true)} style={{color:"red"}}/>}
                                </Box>
                                <MdDelete className={styles.delIcon}/>
                            </Box>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
                    </Tr>
                    <Tr className={styles.Row}>
                        <Th width={"50%"} className={styles.daysFlex}>
                            <Box display="flex" jutsifyContent="center" alignItems="center" gap="10px" fontSize="13px">
                            <BsFillCircleFill color="#24be6a" fontSize="7px"/>
                                <Text fontWeight="500">
                                    NO
                                    <p>ASD</p>
                                </Text>
                                <Box className={styles.toShown}>
                                    <AiOutlineStar/>
                                    {play ? <AiFillPlayCircle onClick={()=>setPlay(false)}/> : <BsStopCircle onClick={()=>setPlay(true)} style={{color:"red"}}/>}
                                </Box>
                                <MdDelete className={styles.delIcon}/>
                            </Box>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex}>
                            <Tooltip label="Your Text" placement="top">
                            <Box className={styles.timeDiv}>
                                -
                            </Box>
                            </Tooltip>
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
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
                  <Box flex="1" textAlign="left" p="5px" fontSize="25px" color="grey">
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
                        <Th width={"50%"} className={styles.daysFlex}>Tasks</Th>
                        <Th className={styles.daysFlex}>
                            Mon
                        </Th>
                        <Th className={styles.daysFlex}>
                            Tue
                        </Th>
                        <Th className={styles.daysFlex}>
                            Wed
                        </Th>
                        <Th className={styles.daysFlex}>
                            Thu
                        </Th>
                        <Th className={styles.daysFlex}>
                            Fri
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sat
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sun
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Th width={"50%"} className={styles.daysFlex}></Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
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
                  <Box flex="1" textAlign="left" p="5px" fontSize="25px" color="grey">
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
                        <Th width={"50%"} className={styles.daysFlex}>Tasks</Th>
                        <Th className={styles.daysFlex}>
                            Mon
                        </Th>
                        <Th className={styles.daysFlex}>
                            Tue
                        </Th>
                        <Th className={styles.daysFlex}>
                            Wed
                        </Th>
                        <Th className={styles.daysFlex}>
                            Thu
                        </Th>
                        <Th className={styles.daysFlex}>
                            Fri
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sat
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sun
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Th width={"50%"} className={styles.daysFlex}></Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
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
                  <Box flex="1" textAlign="left" p="5px" fontSize="25px" color="grey">
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
                        <Th width={"50%"} className={styles.daysFlex}>Tasks</Th>
                        <Th className={styles.daysFlex}>
                            Mon
                        </Th>
                        <Th className={styles.daysFlex}>
                            Tue
                        </Th>
                        <Th className={styles.daysFlex}>
                            Wed
                        </Th>
                        <Th className={styles.daysFlex}>
                            Thu
                        </Th>
                        <Th className={styles.daysFlex}>
                            Fri
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sat
                        </Th>
                        <Th className={styles.daysFlex}>
                            Sun
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Th width={"50%"} className={styles.daysFlex}></Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex}>
                            -
                        </Th>
                        <Th className={styles.daysFlex} isNumeric>-</Th>
                    </Tr>
                    {/* Content */}
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default TimeSheet;
