import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { useState } from "react";

function Task({ task, handleToggle, handleDelete, handleFav }) {
   const [loading, setLoading] = useState(false);
   const [fav, setFav] = useState(false);
   const [del, setDel] = useState(false);

   return (
      <HStack
         p={7}
         spacing={7}
         w={"100%"}
         borderBottom={"1px solid #eaeaea"}
         _hover={{
            bg: "whitesmoke",
            cursor: "pointer",
         }}
      >
         <Box p={1} mr={-3} border="7px solid #22c25e" borderRadius={50}></Box>
         <Heading
            w={"59%"}
            align={"left"}
            textTransform={"capitalize"}
            size={"md"}
            letterSpacing={2}
            color={"blackAlpha.700"}
            fontWeight={600}
            fontFamily="Helvetica"
         >
            {task.title}
         </Heading>
         <Box w={"27%"} align="center">
            <Button
               px={7}
               isLoading={fav}
               variant={"outline"}
               colorScheme={task.isFav ? "whatsapp" : "yellow"}
               borderRadius={"sm"}
               letterSpacing={1}
               onClick={() => {
                  handleFav(task, setFav);
               }}
            >
               {task.isFav ? "Remove from Fav" : "Add to Fav"}
            </Button>
         </Box>
         <Box w={"17%"} align={"right"}>
            <Button
               w={"90%"}
               isLoading={loading}
               colorScheme={task.isCompleted ? "whatsapp" : "yellow"}
               onClick={() => {
                  handleToggle(task);
                  setLoading(!loading);
               }}
               borderRadius={"sm"}
               letterSpacing={1}
            >
               {task.isCompleted ? "DONE" : "NOT DONE"}
            </Button>
         </Box>
         <Box w={"17%"} align={"right"}>
            <Button
               isLoading={del}
               align={"left"}
               w={"80%"}
               bg={"#fe5722"}
               color={"white"}
               onClick={() => {
                  handleDelete(task, setDel);
               }}
               borderRadius={"sm"}
               letterSpacing={1}
               _hover={{
                  bg: "#e44e1e",
               }}
            >
               DELETE
            </Button>
         </Box>
      </HStack>
   );
}

export default Task;
