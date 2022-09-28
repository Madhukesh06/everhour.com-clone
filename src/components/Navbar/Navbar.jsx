import { Box, Flex, Text, IconButton, Button, Stack, Collapse, useColorModeValue, useBreakpointValue, useDisclosure, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import everhourLogo from '../../assets/Everhour-logo.png';


const NAV_ITEMS = [
   {
      label: 'Integrations',
      tag: 'New',
      children: [
         {
            label: 'Asana',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/asana.png'
         },
         {
            label: 'ClickUp',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/clickup.png'
         },
         {
            label: 'Basecamp',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/basecamp.png'
         },
         {
            label: 'Trello',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/trello.png'
         },
         {
            label: 'Jira',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/jira.png'
         },
         {
            label: 'Monday',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/monday.png'
         },
         {
            label: 'GitHub',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/github.png'
         },
         {
            label: 'GitLab',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/gitlab.png'
         },
         {
            label: 'Todoist',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/todoist.png'
         },
         {
            label: 'Notion',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/notion.png'
         },
         {
            label: 'Xero',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/xero.png'
         },
         {
            label: 'QuickBooks',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/quickbooks.png'
         }
      ]
   },
   {
      label: 'Pricing',
      link: '/pricing'
   },
   {
      label: 'Demo',
      link: '/demo'
   }
];


const Navbar = () => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box
         pt={{ base: 0, sm: 0, md: 2, lg: 5 }}
         position="sticky"
         top={{ base: 0, sm: 0, md: -2, lg: -5 }}
         zIndex={7}
      >
         <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4, sm: 4, md: 6, lg: 10 }}
            borderBottom={1}
            boxShadow={'sm'}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            fontSize={'lg'}
            align={'center'}>
            <Flex
               flex={{ base: 1 }}
               justify={{ base: 'start', md: 'start' }}
               align={{ base: 'center' }}>
               <Image
                  boxSize='33px'
                  mr={2}
                  src={everhourLogo}
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}>
                  Everhour
               </Text>

               <Flex display={{ base: 'none', md: 'flex' }} ml={{ base: 7, md: 7, lg: 10 }}>
                  <DesktopNav NAV_ITEMS={NAV_ITEMS} />
               </Flex>
            </Flex>

            <Stack
               flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}>
               <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  as={NavLink}
                  to='/login'
                  fontSize={'md'}
                  fontWeight={500}
                  variant={'shadow'}
                  _hover={{ color: 'black' }}
               >
                  Log in
               </Button>
               <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  colorScheme={'whatsapp'}
                  as={NavLink}
                  to='/signup'
                  _hover={{
                     bg: '#25D366',
                     boxShadow: 'md'
                  }}>
                  Sign up
               </Button>
            </Stack>

            <Flex
               flex={{ base: 1, md: 'auto' }}
               justify={{ base: 'right', md: 'start' }}
               align={{ base: 'center' }}
               display={{ base: 'flex', md: 'none' }}>
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={7} h={7} />
                  }
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
               />
            </Flex>
         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav NAV_ITEMS={NAV_ITEMS} />
         </Collapse>
      </Box>
   );
};

export default Navbar;