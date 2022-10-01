import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";

export default function SidebarMenu() {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={IconButton}
            rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            w="100%"
            pt={6}
            pb={6}
            pl={3}
            pr={3}
            bg="transparent"
          >
            <Avatar
              name="Aaryan Sinha"
              src="https://bit.ly/dan-abramov"
              w="35px"
              h="35px"
              // mr="12px"
            />
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
            <MenuItem color="red">Sign Out</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
