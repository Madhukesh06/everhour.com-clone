import { Box, Flex, Text, Stack, Icon, Link, useColorModeValue, GridItem, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const DesktopSubNav = ({ label, link, logo }) => {
   return (
      <GridItem>
         <Link
            as={NavLink}
            to={link}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
               <Flex
                  justify={'start'}
                  align={'center'}
                  gap={2}
               >
                  <Image src={logo} alt={label} boxSize='17px' />
                  <Text
                     transition={'all .3s ease'}
                     _groupHover={{ color: 'green.400' }}
                     fontSize={'md'}
                  >
                     {label}
                  </Text>
               </Flex>
               <Flex
                  transition={'all .3s ease'}
                  transform={'translateX(-10px)'}
                  opacity={0}
                  _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                  justify={'flex-end'}
                  align={'center'}
                  flex={1}
               >
                  <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
               </Flex>
            </Stack>
         </Link>
      </GridItem>
   );
};

export default DesktopSubNav;