import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../store/auth/auth.actions';

function BottomTab() {
    const dispatch = useDispatch()
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            leftIcon={
              <Avatar
                name="Aaryan Sinha"
                src="https://bit.ly/dan-abramov"
                w="25px"
                h="25px"
                mr="12px"
              />
            }
            rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            w="100%"
            pt={6}
            pb={6}
            pl={3}
            bg="white"
          >
            UserName
          </MenuButton>
          <MenuList fontSize="14px" color="#444444">
            <MenuItem>My Profile</MenuItem>
            <MenuItem onClick={() => alert("Kagebunshin")}>
              Integrations
            </MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuItem>Apps</MenuItem>
            <MenuItem>Request a Demo</MenuItem>
            <MenuItem>Help Docs</MenuItem>
            <MenuItem color="red" as={Button} onClick={() => dispatch(logoutAction())}>Sign Out</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default BottomTab