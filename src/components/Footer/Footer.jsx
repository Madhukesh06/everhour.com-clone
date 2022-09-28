import { Box, Container, Link, SimpleGrid, Stack, Text, Flex, Tag, useColorModeValue, Image, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';


const ListHeader = ({ children }) => {
   return (
      <Text fontWeight={'500'} fontSize={'md'} mb={2} color='whiteAlpha.500' cursor='pointer'>
         {children}
      </Text>
   );
};

export default function Footer() {
   return (
      <Box
         bg={'blackAlpha.900'}
         color={'whiteAlpha.900'}
         align={'left'}
         mt={70}
      >
         <Container as={Stack} maxW={'auto'} py={10} px={{ base: 8, md: 10, lg: 20 }}>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8}>
               <Stack align={'flex-start'}>
                  <ListHeader>Company</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>About us</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Contact</Link>
               </Stack>
               <Stack align={'flex-start'}>
                  <ListHeader>Product</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Tour</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }} as={NavLink} to='/pricing'>Pricing</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Request a demo</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Customers</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>API & docs</Link>
                  <Stack direction={'row'} align={'center'} justify={'center'} spacing={2}>
                     <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>
                        Status
                        <Icon ml={1} viewBox='0 0 200 200' color='green.500'>
                           <path
                              fill='currentColor'
                              d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                           />
                        </Icon>
                     </Link>
                  </Stack>
               </Stack>
               <Stack align={'flex-start'}>
                  <ListHeader>Solutions</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Time tracking</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Project budgeting</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Visual planning</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Expenses</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Invoicing</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Time card calculator</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Weekly timesheet template</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Invoice generator</Link>
               </Stack>
               <Stack align={'flex-start'}>
                  <ListHeader>Integrations</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Asana</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Basecamp</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Trello</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Jira</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>GitHub</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>ClickUp</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Monday</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Notion</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Todoist</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>GitLab</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>All</Link>
               </Stack>
               <Stack align={'flex-start'}>
                  <ListHeader>Learn</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Resources</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Help center</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Blog</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Product updates</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Timesheet app</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Time clock app</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Attendance tracker</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Work hours tracker</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Employee time tracking</Link>
               </Stack>
               <Stack align={'flex-start'}>
                  <ListHeader>Download</ListHeader>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Browser extension</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Chrome time tracking extension</Link>
                  <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>Time tracking with screenshots</Link>
                  <Stack direction={'row'} align={'center'} spacing={2}>
                     <Link _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}>iphone app</Link>
                     <Tag
                        size={'sm'}
                        bg={'whiteAlpha.700'}
                        ml={2}
                        color={'blackAlpha.900'}>
                        Beta
                     </Tag>
                  </Stack>
               </Stack>
            </SimpleGrid>
         </Container>
         <Box py={10}>
            <Flex
               align={'center'}
               _before={{
                  content: '""',
                  borderBottom: '1px solid',
                  borderColor: useColorModeValue('gray.200', 'gray.700'),
                  flexGrow: 1,
                  mr: 8,
               }}
               _after={{
                  content: '""',
                  borderBottom: '1px solid',
                  borderColor: useColorModeValue('gray.200', 'gray.700'),
                  flexGrow: 1,
                  ml: 8,
               }}>
               <Image src='https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Everhour-logo.png' alt='brand-logo' boxSize='44px' borderRadius={50} />
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} pt={6} px={{ base: 4, md: 10, lg: 20 }} align={'center'} justify={'space-between'}>
               <Text fontSize={'sm'} textAlign={'center'}>
                  © 2022 Everhour Terms | Privacy | Cookies | Sitemap
               </Text>
               <Flex>
                  <FaFacebook fontSize={24} style={{ margin: '0.3rem', color: 'black', backgroundColor: 'darkgray', padding: '0.3rem', borderRadius: '50%' }} />
                  <FaTwitter fontSize={24} style={{ margin: '0.3rem', color: 'black', backgroundColor: 'darkgray', padding: '0.3rem', borderRadius: '50%' }} />
                  <FaLinkedinIn fontSize={24} style={{ margin: '0.3rem', color: 'black', backgroundColor: 'darkgray', padding: '0.3rem', borderRadius: '50%' }} />
                  <FaYoutube fontSize={24} style={{ margin: '0.3rem', color: 'black', backgroundColor: 'darkgray', padding: '0.3rem', borderRadius: '50%' }} />
               </Flex>
            </Flex>
         </Box>
      </Box>
   );
}