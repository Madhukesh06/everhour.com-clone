import { Box, Button, HStack, Text, Th, Tr, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill, BsStopCircle } from "react-icons/bs";
import { MdDelete, MdFavorite } from "react-icons/md";

const dashArray = new Array(7).fill("-");

function TaskTableList({ task, handleDelete, handleFav }) {
   const toast = useToast();
   const [play, setPlay] = useState(true);
   const [fav, setFav] = useState(false);
   const [del, setDel] = useState(false);
   const [toShown, setToShown] = useState(false);
   const [dashArr, setDashArr] = useState(dashArray);

   const handleFavorite = () => {
      handleFav(task, setFav);
      if (!task.isFav) {
         toast({
            title: "Added To Favourites",
            description: "",
            status: "success",
            duration: 2000,
            isClosable: true,
         });
      }
      if (task.isFav) {
         toast({
            title: "Removed From Favourites",
            description: "",
            status: "error",
            duration: 2000,
            isClosable: true,
         });
      }
   };

   useEffect(() => {}, [fav]);

   return (
      <>
         <Tr
            onMouseEnter={() => setToShown(true)}
            onMouseLeave={() => setToShown(false)}
         >
            <Th width={"50%"} border="1px solid #eaeaea">
               <HStack spacing={3} fontSize={"sm"}>
                  <BsFillCircleFill color={"#24bd6a"} size={9} />
                  <Box>
                     <Text mb={1} fontWeight="600">
                        {task.title}
                     </Text>
                     <Text fontWeight="100">project zero</Text>
                  </Box>
                  {toShown && (
                     <>
                        <Button
                           onClick={handleFavorite}
                           size={"sm"}
                           variant={"ghost"}
                           _hover={{ bg: "transparent" }}
                        >
                           {task.isFav ? (
                              <MdFavorite size={20} color={"24bd6a"} />
                           ) : (
                              <AiOutlineStar size={22} color={"lightgray"} />
                           )}
                        </Button>
                        {play ? (
                           <AiFillPlayCircle
                              size={20}
                              onClick={() => setPlay(false)}
                              color={"24bd6a"}
                           />
                        ) : (
                           <BsStopCircle
                              size={20}
                              onClick={() => setPlay(true)}
                              color={"#fe5722"}
                           />
                        )}
                     </>
                  )}
                  {toShown && (
                     <Button
                        onClick={() => {
                           handleDelete(task, setDel);
                           toast({
                              title: "Task Deleted Successfully",
                              description: "",
                              status: "error",
                              duration: 2000,
                              isClosable: true,
                           });
                        }}
                        size={"sm"}
                        variant={"ghost"}
                        _hover={{ bg: "transparent" }}
                     >
                        <MdDelete size={19} color={"#fe5722"} />
                     </Button>
                  )}
               </HStack>
            </Th>
            {dashArr.map((item) => (
               <Th border="1px solid #eaeaea" isNumeric>
                  -
               </Th>
            ))}
            <Th border="1px solid #eaeaea" isNumeric>
               -
            </Th>
         </Tr>
      </>
   );
}

export default TaskTableList;
