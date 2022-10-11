import { SmallAddIcon } from "@chakra-ui/icons";
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
   Button,
   FormControl,
   FormLabel,
   Input,
   Icon,
   Tooltip,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export default function TaskModal({ handleTask }) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [text, setText] = useState();
   const initialRef = useRef(null);

   return (
      <>
         <Tooltip
            hasArrow
            label="Create Task"
            bg="black"
            color="white"
            placement="top"
         >
            <Icon
               color="gray"
               cursor="pointer"
               borderRadius="70%"
               border="1px solid #e8e8e8"
               as={SmallAddIcon}
               onClick={onOpen}
            />
         </Tooltip>

         <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Add Task</ModalHeader>
               <ModalCloseButton />
               <ModalBody py={5}>
                  <FormControl>
                     <FormLabel color={"blackAlpha.700"} letterSpacing={0.5}>
                        Task title
                     </FormLabel>
                     <Input
                        ref={initialRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        letterSpacing={0.5}
                        focusBorderColor="green.400"
                        placeholder="📝 Create your task . . ."
                        _placeholder={{
                           opacity: 0.3,
                           color: "tomato",
                        }}
                        _hover={{
                           borderColor: "green.400",
                        }}
                     />
                  </FormControl>
               </ModalBody>

               <ModalFooter color={"white"}>
                  <Button
                     onClick={() => {
                        handleTask(text);
                        setText("");
                        onClose();
                     }}
                     mr={3}
                     colorScheme={"whatsapp"}
                     borderRadius={"sm"}
                  >
                     Add Task
                  </Button>
                  <Button
                     onClick={() => {
                        handleTask(text);
                        setText("");
                     }}
                     mr={3}
                     colorScheme={"yellow"}
                     variant={"outline"}
                     borderRadius={"sm"}
                  >
                     Save and Add Another
                  </Button>
                  <Button
                     onClick={onClose}
                     color={"blackAlpha.700"}
                     variant={"outline"}
                     borderRadius={"sm"}
                  >
                     Cancel
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
}
