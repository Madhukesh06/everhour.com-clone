import { Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import MobileNavItem from './MobileNavItem';


const MobileNav = ({ NAV_ITEMS }) => {
   return (
      <Stack
         bg={useColorModeValue('white', 'gray.800')}
         p={4}
         display={{ md: 'none' }}
      >
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
         <Stack>
            <Link
               as={NavLink}
               to='/login'
               p={2}
               bg='green.200'
               fontWeight={600}
               _hover={{
                  textDecoration: 'none',
                  bg: 'green.300'
               }}
            >
               Log in
            </Link>
            <Link
               as={NavLink}
               to='/signup'
               p={2}
               bg='green.200'
               fontWeight={600}
               _hover={{
                  textDecoration: 'none',
                  bg: 'green.300'
               }}
            >
               Sign up
            </Link>
         </Stack>
      </Stack>
   );
};

export default MobileNav;