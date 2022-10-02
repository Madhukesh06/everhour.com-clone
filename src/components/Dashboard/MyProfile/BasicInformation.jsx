import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Text, useRadio, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getApi, patchApi } from "../../../hooks/Requests";


const initValue = {
   userName: '',
   job: ''
}

const everhourUser = JSON.parse(localStorage.getItem("everhourUser"))

const BasicInformation = () => {
   const [state, setState] = useState(false);
   const [isSame, setIsSame] = useState(false);
   const [img, setImg] = useState({ file: null });
   const [user, setUser] = useState(initValue);
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   
   const handleChange = (e) => {
      setImg({ file: URL.createObjectURL(e.target.files[0]) });
   };
   
   const getUser = () => {
      getApi(everhourUser.email).then((res) => setUser(res))
   }
   
   const handleSubmit = () => {
      patchApi(user , user.email).then((res) => setUser(res))
   }
   
   
   useEffect(() => {
      getUser()
      if (newPassword === confirmPassword) setIsSame(true);
      else setIsSame(false);
   }, [newPassword, confirmPassword]);

   
   return (
      <VStack
         w={{ base: '100%', lg: '70%' }}
         py={7}
         align={'left'}
         justify={'center'}
         spacing={7}
         boxSizing={'border-box'}
         color={'blackAlpha.800'}
      >
         <Heading
            align={'left'}
            size={'md'}
            fontWeight={400}
         >
            Basic Information
         </Heading>
         <Flex
            align={'center'}
            justify={'left'}
            gap={7}
            direction={['column', 'row']}
         >
            <Image
               boxSize={100}
               alt='avatar'
               src={img.file || 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Everhour-logo.png'}
            />
            <VStack
               align={'left'}
               justify={'center'}
               spacing={4}
            >
               <Text align={{ base: 'center', md: 'left' }}>
                  Photos help your teammates recognize you in Everhour.
               </Text>
               <HStack spacing={4}>
                  <Button
                     w={{ base: '50%', md: '36%' }}
                     borderRadius={'sm'}
                     variant={'outline'}
                     fontWeight={400}
                     bg={'blackAlpha.50'}
                     pos={'relative'}
                     _hover={{
                        bg: 'blackAlpha.100',
                     }}
                  >
                     <Input
                        w={'100%'}
                        type='file'
                        opacity={0}
                        onChange={handleChange}
                     />
                     <Text
                        pos={'absolute'}
                        zIndex={-1}
                     >
                        Upload Photo
                     </Text>
                  </Button>
                  <Button
                     w={{ base: '50%', md: '36%' }}
                     borderRadius={'sm'}
                     variant={'ghost'}
                     fontWeight={400}
                     color={'blackAlpha.500'}
                     _hover={{
                        bg: 'none',
                        color: 'blue.400'
                     }}
                     onClick={() => setImg({ file: null })}
                  >
                     Delete Photo
                  </Button>
               </HStack>
            </VStack>
         </Flex >
         <FormControl onSubmit={handleSubmit}>
            <Flex
               mt={4}
               gap={5}
               direction={{ base: 'column', md: 'row' }}
            >
               <Box w={{ base: '100%', md: '50%' }}>
                  <FormLabel fontSize={'sm'}>Full Name</FormLabel>
                  <Input
                     name='userName'
                     value={user.userName}
                     onChange={(e) => setUser({ ...user, userName: e.target.value })}
                     borderRadius={'sm'}
                     borderColor={'blackAlpha.300'}
                     type='text'
                     placeholder='Add your Full name'
                     focusBorderColor={'none'}
                     _placeholder={{
                        opacity: 0.3,
                        color: 'black'
                     }}
                     _hover={{
                        borderColor: 'green.400',
                     }}
                  />
               </Box>
               <Box w={{ base: '100%', md: '50%' }}>
                  <FormLabel fontSize={'sm'}>Job Title</FormLabel>
                  <Input
                     name='job'
                     value={user.job}
                     onChange={(e) => setUser({ ...user, job: e.target.value })}
                     borderRadius={'sm'}
                     borderColor={'blackAlpha.300'}
                     type='text'
                     placeholder='Add your Job title'
                     focusBorderColor={'none'}
                     _placeholder={{
                        opacity: 0.3,
                        color: 'black'
                     }}
                     _hover={{
                        borderColor: 'green.400',
                     }}
                  />
               </Box>
            </Flex>
            <Flex
               mt={4}
               gap={5}
               direction={{ base: 'column', md: 'row' }}
            >
               <Box w={{ base: '100%', md: '50%' }}>
                  <FormLabel fontSize={'sm'}>Email Address</FormLabel>
                  <Flex
                     w={'100%'}
                     h={41}
                     align={'center'}
                     boxSizing={'border-box'}
                     px={4}
                     border={1}
                     borderRadius={'sm'}
                     borderStyle={'solid'}
                     borderColor={'blackAlpha.100'}
                     fontWeight={400}
                     bg={'blackAlpha.50'}
                  >
                     {user.email || "useremail@gmail.com"}
                  </Flex>
               </Box>
               <Box w={'50%'} align={'left'}>
                  <FormLabel fontSize={'sm'}>Password</FormLabel>
                  <Button
                     onClick={() => setState(!state)}
                     borderRadius={'sm'}
                     variant={'outline'}
                     fontWeight={400}
                     bg={'blackAlpha.50'}
                     _hover={{
                        bg: 'blackAlpha.100'
                     }}
                  >
                     {state ? "Cancel Change" : "Change Password"}
                  </Button>
               </Box>
            </Flex>
            {state &&
               <Flex
                  mt={7}
                  gap={5}
                  direction={{ base: 'column', md: 'row' }}
               >
                  <Box w={{ base: '100%', md: '50%' }}>
                     <FormLabel fontSize={'sm'}>New Password</FormLabel>
                     <Input
                        name='newPassword'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        borderRadius={'sm'}
                        borderColor={isSame ? 'green.400' : 'red.400'}
                        type='password'
                        placeholder=''
                        focusBorderColor={'none'}
                        _hover={isSame ? {
                           borderColor: 'green.400'
                        } : {
                           borderColor: 'red.400'
                        }}
                     />
                  </Box>
                  <Box w={{ base: '100%', md: '50%' }}>
                     <FormLabel fontSize={'sm'}>Confirm Password</FormLabel>
                     <Input
                        name='confirmPassword'
                        value={user.confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        borderRadius={'sm'}
                        borderColor={isSame ? 'green.400' : 'red.400'}
                        type='text'
                        placeholder=''
                        focusBorderColor={'none'}
                        _hover={isSame ? {
                           borderColor: 'green.400'
                        } : {
                           borderColor: 'red.400'
                        }}
                     />
                  </Box>
               </Flex>}
            <Button
               onClick={handleSubmit}
               w={'100%'}
               mt={7}
               bg='#24bd6a'
               color='white'
               letterSpacing={1}
               borderRadius={'sm'}
               fontWeight={400}
               _hover={{
                  bg: 'green.400'
               }}
            >
               Save Changes
            </Button>
         </FormControl>
      </VStack >
   );
}

export default BasicInformation;