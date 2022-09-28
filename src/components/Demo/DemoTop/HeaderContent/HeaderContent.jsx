import React from "react";
import { chakra } from "@chakra-ui/react";

const HeaderContent = () => {
    return (
        <chakra.p
            mt={{ base: 3, sm: 5, md: 5 }}
            mx={{ sm: "auto", lg: 0 }}
            mb={6}
            fontSize="1.375rem"
            color="#767676"
            lineHeight="1.36"
            fontWeight="400"
        >
            10+ users? Let one of our customer success experts show you how Everhour
            works, with plenty of time set aside for questions
        </chakra.p>
    );
};

export default HeaderContent;
