import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ActionTimer from "../../../hooks/ActionTimer";
import useStartStop from "../../../hooks/useStartStop";

const ButtonSec = () => {
  const { counter, pause, start } = useStartStop();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    {
      click ? start() : pause();
    }
  }, [click]);

  return (
    <Box w={{ base: "100%", md: "15%" }}>
      <Button
        w="100%"
        h="100%"
        size="lg"
        bg={click ? "#ff5722" : "#24bd6a"}
        padding={{ base: "1.5rem", md: "2rem" }}
        borderRadius={{ base: "0.2rem", md: "0" }}
        color="white"
        fontWeight="bold"
        letterSpacing={1}
        _hover={click ? { bg: "#f44336" } : { backgroundColor: "#4caf50" }}
        onClick={handleClick}
      >
        {click ? ActionTimer(counter) : "Start Timer"}
      </Button>
    </Box>
  );
};

export default ButtonSec;
