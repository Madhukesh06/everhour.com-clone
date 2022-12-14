import {
   Flex,
   Box,
   FormControl,
   Input,
   Link,
   Button,
   Heading,
   Text,
   VStack,
   chakra,
   Image,
   useToast,
   InputGroup,
   InputRightElement,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/auth/auth.actions";
import girl from "../../assets/girl.jpg";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
   const [showPassword, setShowPassword] = useState(false);
   const [creds, setCreds] = useState({ email: "", password: "" });
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const toast = useToast();
   const [isEmpty, setIsEmpty] = useState(true);

   const onChange = (e) => {
      const { name, value } = e.target;
      setCreds({
         ...creds,
         [name]: value,
      });
   };

   const handleSubmit = () => {
      dispatch(loginAction(creds)).then((res) => {
         if (res) {
            toast({
               title: "Login successful",
               description: "Go ahead, start work on your projects.",
               status: "success",
               duration: 3000,
               isClosable: true,
            });
            navigate("/dashboard");
         }
         if (!res) {
            toast({
               title: "Invalid credential",
               description: "Please try again with the correct credential.",
               status: "error",
               duration: 3000,
               isClosable: true,
            });
         }
      });
   };

   useEffect(() => {
      if (creds.email !== "" && creds.password !== "") setIsEmpty(false);
      else setIsEmpty(true);
   }, [creds]);

   return (
      <Box pos="relative" pb="14rem" overflow={"hidden"}>
         <Image
            pos="absolute"
            transform="rotate(180deg)"
            display={{ base: "none", lg: "flex" }}
            zIndex={-1}
            top="7rem"
            src="https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/components/Demo/Images/oval-solid-orange.png"
            alt="backgroud-pngs"
         />
         <Image
            pos="absolute"
            display={{ base: "none", lg: "flex" }}
            zIndex={-1}
            top="6rem"
            left="7rem"
            h={120}
            src="https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/components/Demo/Images/green.png"
            alt="backgroud-pngs"
         />
         <Image
            pos="absolute"
            transform="rotate(130deg)"
            display={{ base: "none", lg: "flex" }}
            zIndex={-1}
            right="-14rem"
            src="https://github.com/Madhukesh06/efficacious-talk-3107/blob/master/src/components/Demo/Images/dot.png?raw=true"
            alt="backgroud-pngs"
         />
         <Image
            pos="absolute"
            display={{ base: "none", lg: "flex" }}
            zIndex={1}
            bottom="0"
            right="10rem"
            src={girl}
            alt="backgroud-pngs"
         />
         <Box
            w="100%"
            p={4}
            color="black"
            m="auto"
            mt={{ base: "2rem", md: "5rem" }}
            mb={{ base: "none", md: "2rem" }}
         >
            <Heading
               size={{ base: "xl", md: "2xl" }}
               fontWeight={"bold"}
               color={"blackAlpha.800"}
            >
               Log in to EverHour
            </Heading>
         </Box>
         <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center "
            w={{ base: "96%", lg: "50%" }}
            m="auto"
            boxShadow="lg"
            borderRadius="lg"
            border="1px solid whitesmoke"
            bg={"white"}
         >
            <VStack
               p={7}
               boxSizing="border-box"
               align="center"
               justify="center"
               w={{ base: "100%", md: "50%" }}
            >
               <Button m={7} w={"100%"} variant={"outline"} size={"lg"}>
                  <FcGoogle size={22} style={{ marginRight: "11px" }} />
                  Log in with Google
               </Button>
               <h2>Or</h2>
               <FormControl>
                  <Input
                     name="email"
                     size={"lg"}
                     focusBorderColor={"green.300"}
                     mb={4}
                     _hover={{
                        borderColor: "#24bd6a",
                     }}
                     type="text"
                     placeholder="Enter your email..."
                     onChange={onChange}
                  />
                  <InputGroup>
                     <Input
                        name="password"
                        onChange={onChange}
                        size="lg"
                        focusBorderColor={"green.300"}
                        _hover={{ borderColor: "green.300" }}
                        type={showPassword ? "text" : "password"}
                        placeholder="Set your password..."
                     />
                     <InputRightElement h={"full"}>
                        <Button
                           variant={"ghost"}
                           onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                           }
                        >
                           {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                     </InputRightElement>
                  </InputGroup>
                  <Button
                     w={"100%"}
                     px={14}
                     mt={7}
                     size={"lg"}
                     bg={"#57ba72"}
                     color={"white"}
                     _hover={{
                        bg: "#24bd6a",
                     }}
                     disabled={isEmpty}
                     onClick={handleSubmit}
                  >
                     Log In
                  </Button>
               </FormControl>

               <Box>
                  <Link
                     textDecoration={"underline"}
                     gap={"50px"}
                     color={"gray.500"}
                     mx="30"
                  >
                     Login with SSO{" "}
                  </Link>
                  <Link textDecoration={"underline"} color={"gray.500"}>
                     Login more options{" "}
                  </Link>
               </Box>
               <Link textDecoration={"underline"} color={"gray.500"}>
                  Reset Password{" "}
               </Link>
            </VStack>

            <Box
               w={{ base: "100%", md: "50%" }}
               align="left"
               borderLeft={{ base: "none", md: "1px solid lightgray" }}
               borderTop={{ base: "1px solid lightgray", md: "none" }}
               color={""}
            >
               <Box p={7}>
                  <Text color={"red"}>News</Text>
                  <Text
                     mb="10px"
                     fontSize="1rem"
                     color={"black"}
                     fontWeight="bold"
                  >
                     New Timeline
                  </Text>
                  <chakra.p fontSize="1rem">
                     Sync assignments from your connected integrations
                     automatically once you add a task assignee and a due date
                     th...{" "}
                     <Link textDecoration={"underline"} color={"blue.500"}>
                        Learn More{" "}
                     </Link>
                  </chakra.p>

                  <Text mt="1rem" fontWeight="bold">
                     Updates to Tracking Time Without Task
                  </Text>

                  <chakra.p fontSize="1rem">
                     Now you can track the task it will show<br></br> on team
                     timesheets immediately.
                     <Link textDecoration={"underline"} color={"blue.500"}>
                        Learn More{" "}
                     </Link>
                  </chakra.p>

                  <Box mb="40px" marginTop={10}>
                     <Text color="black.800" mt="1rem" fontWeight="bold">
                        Integration with Todoist
                     </Text>
                     <chakra.p fontSize="1rem">
                        EverHour now integrates with todoist{" "}
                        <Link textDecoration={"underline"} color={"blue.500"}>
                           Learn More{" "}
                        </Link>
                     </chakra.p>
                  </Box>
               </Box>
            </Box>
         </Flex>

         <Box
            bg="white"
            w={{ base: "100%", md: "50%" }}
            p={4}
            color="black"
            margin="auto"
            marginTop="70px"
            fontSize="37px"
         >
            <h1>New to EverHour?</h1>
         </Box>
         <Box
            bg="white"
            w={{ base: "100%", md: "50%" }}
            p={7}
            color="gray.500"
            margin="auto"
            marginTop="0px"
            fontSize="20px"
         >
            <h1>Try Everhour for free and see if it works gor your Business</h1>
         </Box>

         <Flex w={{ base: "95%", md: "30%" }} margin={"auto"} gap={4}>
            <Input
               size={{ base: "md", md: "lg" }}
               focusBorderColor={"green.300"}
               _hover={{
                  borderColor: "#24bd6a",
               }}
               type="text"
               placeholder="Work email..."
            />
            <Box p="" w="150px">
               <Button
                  size={{ base: "md", md: "lg" }}
                  padding="1.2rem"
                  bg={"#57ba72"}
                  color={"white"}
                  _hover={{
                     bg: "#24bd6a",
                  }}
               >
                  Try it free
               </Button>
            </Box>
         </Flex>
         <Button
            m={4}
            color={"gray"}
            variant={"ghost"}
            _hover={{
               bg: "none",
               textDecoration: "underline",
            }}
         >
            <FcGoogle size={22} style={{ marginRight: "11px" }} />
            OR Signup with Google Account.
         </Button>
      </Box>
   );
}
