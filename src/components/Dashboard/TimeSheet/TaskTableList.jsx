import { Box, HStack, Text, Th, Tr, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill, BsStopCircle } from "react-icons/bs";
import { MdDelete, MdFavorite } from "react-icons/md";

const dashArray = new Array(7).fill("-");

function TaskTableList({ task }) {
   const toast = useToast();
   const [play, setPlay] = useState(true);
   const [fav, setFav] = useState(false);
   const [toShown, setToShown] = useState(false);
   const [dashArr, setDashArr] = useState(dashArray);

   const handleFav = () => {
      setFav(!fav);
      if (!fav) {
         toast({
            title: "Added To Favourites",
            description: "",
            status: "success",
            duration: 2000,
            isClosable: true,
         });
      } else {
         toast({
            title: "Removed From Favourites",
            description: "",
            status: "error",
            duration: 2000,
            isClosable: true,
         });
      }
   };

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
                        {task}
                     </Text>
                     <Text fontWeight="100">project zero</Text>
                  </Box>
                  {toShown && (
                     <>
                        {fav ? (
                           <MdFavorite
                              size={20}
                              onClick={handleFav}
                              color={"24bd6a"}
                           />
                        ) : (
                           <AiOutlineStar
                              size={22}
                              onClick={handleFav}
                              color={"lightgray"}
                           />
                        )}
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
                              color={"#f44336"}
                           />
                        )}
                     </>
                  )}
                  {toShown && <MdDelete size={19} color={"gray"} />}
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
