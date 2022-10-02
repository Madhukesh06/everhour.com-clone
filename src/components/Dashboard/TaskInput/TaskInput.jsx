import { AddIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useHighlight } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useTaskInput from "../../../hooks/useTaskInput";

function TaskInput() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const initialRef = useRef(null);
   const { addTask } = useTaskInput();
   const [input, setInput] = useState('');


   return (
      <>
         <ButtonGroup m={4} size={'sm'} isAttached color={'white'}>
            <Button
               onClick={onOpen}
               bg='#24bd6a'
               borderRadius={'sm'}
               px={5}
               _hover={{
                  bg: 'green.400'
               }}
            >
               Add Task
            </Button>
            <IconButton
               onClick={onOpen}
               borderLeft={1}
               borderStyle={'solid'}
               borderColor={'green.500'}
               bg='#24bd6a'
               borderRadius={'sm'}
               aria-label='Add Task'
               icon={<AddIcon />}
               _hover={{
                  bg: 'green.400'
               }}
            />
         </ButtonGroup>

         <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Add Task</ModalHeader>
               <ModalCloseButton />
               <ModalBody py={5}>
                  <FormControl>
                     <FormLabel color={'blackAlpha.700'} letterSpacing={0.5}>Task title</FormLabel>
                     <Input
                        ref={initialRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        letterSpacing={0.5}
                        focusBorderColor='green.400'
                        placeholder='📝 Create your task . . .'
                        _placeholder={{
                           opacity: 0.3,
                           color: 'tomato'
                        }}
                        _hover={{
                           borderColor: 'green.400'
                        }}
                     />
                  </FormControl>
               </ModalBody>

               <ModalFooter color={'white'}>
                  <Button
                     onClick={() => {
                        addTask(input);
                        setInput('');
                        onClose();
                     }}
                     mr={3}
                     colorScheme={'whatsapp'}
                     borderRadius={'sm'}
                  >
                     Add Task
                  </Button>
                  <Button
                     onClick={() => {
                        addTask(input);
                        setInput('');
                     }}
                     mr={3}
                     colorScheme={'yellow'}
                     variant={'outline'}
                     borderRadius={'sm'}
                  >
                     Save and Add Another
                  </Button>
                  <Button
                     onClick={onClose}
                     color={'blackAlpha.700'}
                     variant={'outline'}
                     borderRadius={'sm'}
                  >
                     Cancel
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}

export default TaskInput;