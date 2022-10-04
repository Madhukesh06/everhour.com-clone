import { Button, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutAction } from '../../../store/auth/auth.actions';
import MobileNavItem from './MobileNavItem';


const MobileNav = ({ NAV_ITEMS }) => {

   let token = localStorage.getItem("token") 
   const dispatch = useDispatch()

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
         {
               token? 
               <Button
               onClick={() => dispatch(logoutAction())}
                  p={2}
                  bg='green.200'
                  fontWeight={600}
                  _hover={{
                     textDecoration: 'none',
                     bg: 'green.300'
                  }}>
                     Logout
                  </Button>
               :
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
            }
            <Link
               as={NavLink}
               to={token ? "/dashboard" : '/signup'}
               p={2}
               bg='green.200'
               fontWeight={600}
               _hover={{
                  textDecoration: 'none',
                  bg: 'green.300'
               }}
            >
               {token ? "My Account" : "Sign up"}
            </Link>
         </Stack>
      </Stack>
   );
};

export default MobileNav;