import {
    Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function ProjectModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Project</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl marginTop="30px">
              <FormLabel>Project Name</FormLabel>
              <Input ref={initialRef} focusBorderColor="green.200"  />
            </FormControl>
            <FormControl marginTop="20px">
              <FormLabel>Layout</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Board
                  </Radio>
                  <Radio colorScheme="green" value="2">
                    List
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl marginTop="30px">
              <FormLabel>Client</FormLabel>
              <Input  placeholder="Select Client" focusBorderColor="green.200" />
            </FormControl>
            <FormControl marginTop="30px">
              <FormLabel>Privacy</FormLabel>
              <Select placeholder="Select option" focusBorderColor="green.200" >
                <option value="option1">Public To Team </option>
                <option value="option2">Only Selected Members</option>
              </Select>
            </FormControl>
            <FormControl marginTop="30px">
              <FormLabel>Members</FormLabel>
              <Select placeholder="Select option" focusBorderColor="green.200" >
                <option value="option1">Select Members</option>
                <option value="option2">Only Selected Members</option>
              </Select>
            </FormControl>
            <FormControl marginTop="30px">
              <FormLabel>Who Can Manage Tasks ?</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    EveryOne
                  </Radio>
                  <Radio colorScheme="green" value="2">
                    Only Admins
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter textAlign="left" display="flex" justifyContent="left">
            <Button colorScheme="green" mr={3}>
              Create Project
            </Button>
            <Button onClick={onClose} bg="white" color="grey">Cancel</Button>
          </ModalFooter>
          <Box w="90%" m = "auto" p="10px">
            <Text fontSize="12px">Learn more by watching tutorial video or reading help docs.</Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectModal;
