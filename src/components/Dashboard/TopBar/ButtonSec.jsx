import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ActionTimer from "../../../hooks/ActionTimer";
import useStartStop from "../../../hooks/useStartStop";

const ButtonSec = () => {

    // const {hours, minutes, seconds} = useTimeSheetHook()
    const {counter, pause, start} = useStartStop()
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        {click ? start() : pause()}
    }, [click])

    return (
        <Box width={{ base: "100%", md: "15%" }}>
            <Button
                h="100%"
                bg={click ? "red.500" : "#24BE6A"}
                padding={{ base: "1.5rem", md: "1.8rem" }}
                _hover={click ? {bg: 'red'} : { backgroundColor: "green" }}
                borderRadius={{ base: "0.2rem", md: "0" }}
                color="white"
                width="100%"
                fontWeight="400"
                onClick={handleClick}
            >
                {click ? ActionTimer(counter) : "Start Timer"}
            </Button>
        </Box>
    );
};

export default ButtonSec;
