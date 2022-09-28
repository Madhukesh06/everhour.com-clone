import { Box, Stack, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, Tag, Grid } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import DesktopSubNav from './DesktopSubNav';


const DesktopNav = ({ NAV_ITEMS }) => {
   const linkColor = useColorModeValue('gray.600', 'gray.200');
   const linkHoverColor = useColorModeValue('gray.800', 'white');
   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

   return (
      <Stack direction={'row'} spacing={{ base: 4, md: 4, lg: 7 }}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                     <Link
                        p={2}
                        as={NavLink}
                        to={navItem.link}
                        fontSize={'md'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                           textDecoration: 'none',
                           color: linkHoverColor,
                        }}
                     >
                        {navItem.label}
                        {
                           navItem.tag && (
                              <Tag
                                 size={'sm'}
                                 variant='solid'
                                 bg='green.400'
                                 mt={1.5}
                                 ml={1.5}
                              >
                                 {navItem.tag}
                              </Tag>
                           )
                        }
                     </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={'lg'}
                        // minW={'sm'}
                     >
                        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                           {navItem.children.map((child) => (
                              <DesktopSubNav key={child.label} {...child} />
                           ))}
                        </Grid>
                     </PopoverContent>
                  )}
               </Popover>
            </Box>
         ))}
      </Stack>
   );
};

export default DesktopNav;