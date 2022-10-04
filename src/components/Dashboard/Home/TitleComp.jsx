import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { MdRadioButtonUnchecked } from "react-icons/md";

const TitleComp = ({ handleNum, children }) => {
  const [value, setValue] = useState(false);

  return (
    <Flex
      onClick={() => handleNum(children)}
      h={"25%"}
      align="center"
      justify="space-between"
      boxSizing="border-box"
      px={4}
      fontSize={"lg"}
      fontWeight={600}
      color={"blackAlpha.700"}
      _hover={{
        bg: "blackAlpha.50",
        cursor: "pointer",
      }}
    >
      <Box>{children}</Box>
      {value ? (
        <HiCheckCircle
          onClick={() => setValue(!value)}
          size={22}
          style={{ color: "#24bd6a" }}
        />
      ) : (
        <MdRadioButtonUnchecked
          onClick={() => setValue(!value)}
          size={22}
          style={{ color: "lightgray" }}
        />
      )}
    </Flex>
  );
};

export default TitleComp;
