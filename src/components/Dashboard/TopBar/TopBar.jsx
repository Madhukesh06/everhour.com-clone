import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ButtonSec from "./ButtonSec";

import MidSec from "./MidSec";
import TaskModal from "./TaskModal";
import "./scroll.css";
import { SearchIcon } from "@chakra-ui/icons";

export default function TopBar() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const handleInput = () => {
    // inputRef.value.reset();
  };

  const openTask = () => { };

  const getTasks = () => {
    setData([
      { title: "Learn React" },
      { title: "Learn Java" },
      { title: "Learn Redux" },
      { title: "Learn Redux-Thunk" },
    ]);
  };

  useEffect(() => {
    getTasks();
  }, [text]);
  return (
    <>
      <Flex
        border={{ base: "0", md: "1px solid lightgray" }}
        direction={{ base: "column", md: "row" }}
        w="100%"
        m="auto"
        mt="1rem"
        pos={"relative"}
        justify={{ base: "center" }}
        align="center"
        padding={{ base: "0.5rem", md: "0" }}
        bg={"white"}
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          border={{ base: "1px solid #e8e8e8", md: "hidden" }}
          borderRadius={{ base: "0.5rem", md: "0" }}
          padding={{ base: "0.8rem" }}
        >
          <Icon
            color="gray"
            cursor="pointer"
            borderRadius="70%"
            px="2px"
            as={SearchIcon}
            boxSize={7}
          />

          <Input
            ref={inputRef}
            value={text}
            width="90%"
            variant={{ outline: "none" }}
            type="text"
            placeholder="What are you working on..."
            _placeholder={{ opacity: "0.4" }}
            onChange={(e) => setText(e.target.value)}
          />

          <TaskModal />
        </Box>
        <MidSec />
        <ButtonSec />
      </Flex>
      {text && (
        <Box
          textAlign="left"
          w="80.5%"
          m="auto"
          className="box"
          border={{ base: "0", md: "1px solid lightgray" }}
          px={10}
        >
          <Box fontSize={14} fontWeight={600} color="#A2AAB1">
            ACTIVE PROJECTS
          </Box>
          {data?.map((el) => (
            <>
              <Box p={1} key={el.title} className="box1" onClick={handleInput}>
                {el.title}
              </Box>
            </>
          ))}
        </Box>
      )}
    </>
  );
}
