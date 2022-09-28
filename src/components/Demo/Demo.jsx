import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./DemoTop/Header/Header";
import HeaderContent from "./DemoTop/HeaderContent/HeaderContent";
import Buttons from "./DemoTop/Buttons/Buttons";
import DemoMidSec from "./DemoMidSection/DemoMidSec";
import DemoBottomSec from "./DemoBottomSection/DemoBottomSec";


export default function Demo() {
    return (
        <>
            <Box pos="relative" overflow="hidden">
                <Box maxW="7xl" mx="auto">
                    <Box
                        pos="relative"
                        w="full"
                        border="solid 1px transparent"
                    >
                        <Box
                            maxW={{ base: "7xl" }}
                            px={{ base: 4, sm: 6, lg: 8 }}
                            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
                        >
                            <Box
                                textAlign="center"
                                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                                mx="auto"
                            >
                                <Header />
                                <HeaderContent />
                                <Buttons />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box pos="relative"><DemoMidSec /></Box>

            <DemoBottomSec />
        </>

    );
}
