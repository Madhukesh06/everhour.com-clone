import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
  <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}
              width=''>
              Make your team more productive with Everhour
            </Heading>

            <p>join 35000 customers+  who use Everhour to track time and plan their future projects more effectively.</p>
            <Text fontSize={'lg'} color={'gray.600'}>

            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>

                <Box>

                </Box>
              </HStack>
              <FormControl id="email" isRequired>

                <Input type="email" placeholder='Sign up with google' />
              </FormControl>

              <h1><object data="" type="">Or</object></h1>
              <FormControl id="password" isRequired>

                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder=' Work  Email...' />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Get Started
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}
                  gap='30px'
                  paddingLeft='10px'>

                  Free to try     .No credit card .1minute-signup
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        </Flex>
<h1></h1>
      <Flex w='60%' m='auto' h='800px'>
        <Stack  m={2} w='35%' gap='25px'>
          <Box borderColor='green' height="65%" border="1px solid teal" justifyContent='center'paddingTop='60px'>
          "I am the owner of the company, and I <br></br>
            <span style={{backgroundColor:" yellow"}}>useEverhour for time keeping of myself and</span><br></br>  my sub contractors.All team members usethe system_from web developers to
            techsupport to<br></br> projectmanagement to design"
            <br></br>
            <h5  marginTop='70px'>-Jennifer H. [Source:TrustRadius]</h5> 
          </Box>
          <Box height="65%" border="1px solid teal" justifyContent='center'paddingTop='60px'>
            "We are using everhour as a core business software,   <span style={{backgroundColor:" yellow"}}> because our business is to sellour time .When you usesuch software,what you care about the most</span> is speed,flexibility,ability to integrate with all major project management software And Everhour is exactly that kind of software."
          </Box>
          <Box height="65%" border="1px solid teal" justifyContent='center'paddingTop='60px'>"Everhour's intergration with Asana is Wonderful for a remote team. We track all activites in Asana, but before Everhour I <span style={{backgroundColor:" yellow"}}> often wondered how long it was taking to do a task, now i know exactly. i can see who is working right now and </span> a summary each day" </Box>
        </Stack>
        <Stack m={2} w='35%' gap='25px'>
          <Box height="65%" border="1px solid teal" justifyContent='center'paddingTop='60px'>EverHour is being used by department now<br></br>
          ,but it is plannedto be used across the company.<br></br>
          
          We were havingproblems trackingthe times<br></br>
          <span style={{backgroundColor:" yellow"}}> of every project and everhour <br></br>
           endedup being the best solution to</span> the issue.we<br></br>
            aretracking our tasks involved in everyproject<br></br>
            ,in every level[software development,meetings,project management, etc]"
            <h5  marginTop='70px'>-Maria Lucia. [Source:TrustRadius]</h5>
            
            </Box>
          <Box height="70%" border="1px solid teal" justifyContent='center'paddingTop='60px'>“We are a 15 people team working remotely from different cities of <span style={{backgroundColor:" yellow"}}> Latin America and Europe, and time tracking for each</span> client, project, and task has always been a major issue. We’ve been using Everhour for the past year or so, and it has become an essential tool for our team. It does not only give us the ability to track how much time we have dedicated to a project but also to estimate how much time a particular task will need in order to be completed next time and by who. Easily create and save reports with just a few clicks”</Box>
        </Stack>
        <Stack m={2} w='35%' gap='25px'>
          <Box height="65%" border="1px solid teal" justifyContent='center'paddingTop='60px'>Everhour helps me to manage/plan my weekly activities a lot more effectively.Since i know how much time I have to work onthing each day,and can  <span style={{backgroundColor:" yellow"}}>quickly update estimated times to reallocate tasks as needed'</span>
          <h5  marginTop='70px'>-Dan S. [Source:TrustRadius]</h5> </Box>
          
          <Box height="65%" border="1px solid teal"  justifyContent='center'paddingTop='60px'>"  <span style={{backgroundColor:" yellow"}}>The most important gain from using EverHour is that we can track our task in real - time without </span>having leave the browser. The chrome add_on helps to initiate the timefor aspecific task.If we are already on Asana, A simple click does the job"
          <h5>-Dimtris R  [Source: Capital]</h5></Box>
          <Box height="65%" border="1px solid teal"  justifyContent='center'paddingTop='60px'>“Everhour has already paid for itself for the year by helping me track time I was missing in client projects.  <span style={{backgroundColor:" yellow"}}>It is easy to use, has friendly customer service people, and the</span> reports make it easy to invoice clients and track projects.”
          <h5  marginTop='70px'>-Jenniffer D. [Source:TrustRadius]</h5></Box>
        </Stack>
      </Flex>

      <Button
                bg={'white.400'}
                color={'green'}
                border='2px solid green'
                _hover={{
                  bg: 'green.400',
                }}>
              <Link color={'black.400'}>Read More</Link>
              </Button>   
</>
    
  );
}