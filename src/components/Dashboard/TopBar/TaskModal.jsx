import { SmallAddIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { postTask } from '../../../hooks/Requests';
import useTaskInput from '../../../hooks/useTaskInput';
import "./scroll.css"


export default function TaskModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addTask } = useTaskInput();
    const [text, setText] = useState()
    const initialRef = useRef(null)
    const everhourUser = JSON.parse(localStorage.getItem("everhourUser"));

    const handleTask = (text) => {
        postTask(
            {
                title: text,
                isCompleted: false,
                isFav: false,
            },
            everhourUser.email
        )
    };


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
                    // onClick={openTask}
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
                                addTask(text);
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
                                addTask(text);
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

            {/* <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={4}>
                        <FormControl>
                            <FormLabel>Task Name</FormLabel>
                            <Input className='input-color' focusBorderColor='red' ref={initialRef} placeholder='Enter Task Title' onChange={(e) => setText(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter m="auto" ml={0}>
                        <Button colorScheme={"whatsapp"}
                            borderRadius={"sm"} mr={3}
                            onClick={() => {
                                addTask(text);
                                setText("");
                                onClose()
                            }}>
                            Create Task
                        </Button>
                        <Button onClick={onClose} borderRadius={"sm"}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal > */}
        </>
    )
}