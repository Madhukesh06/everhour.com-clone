import { Flex, Text, Stack, Collapse, Icon, Link, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const MobileNavItem = ({ label, children, link }) => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Stack spacing={4} onClick={children && onToggle}>
         <Flex
            py={2}
            as={NavLink}
            to={link}
            justify={'space-between'}
            align={'center'}
            _hover={{
               textDecoration: 'none',
            }}>
            <Text
               fontWeight={600}
               color={useColorModeValue('gray.600', 'gray.200')}>
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
               />
            )}
         </Flex>

         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
               mt={2}
               pl={4}
               borderLeft={1}
               borderStyle={'solid'}
               borderColor={useColorModeValue('gray.200', 'gray.700')}
               align={'start'}>
               {children &&
                  children.map((child) => (
                     <Link key={child.label} py={2} as={NavLink} to={child.link}>
                        {child.label}
                     </Link>
                  ))}
            </Stack>
         </Collapse>
      </Stack>
   );
};

export default MobileNavItem;