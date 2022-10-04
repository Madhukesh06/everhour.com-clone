import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

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
            p={6}
            bg="transparent"
            leftIcon={<CgProfile color={"gray"} size={30} />}
          ></MenuButton>
          <MenuList p={2} fontSize="14px" color="#444444">
            <MenuItem fontWeight="600" letterSpacing={1}>
              My Profile
            </MenuItem>
            <MenuItem
              fontWeight="600"
              letterSpacing={1}
              onClick={() => alert("Kagebunshin")}
            >
              Integrations
            </MenuItem>
            <MenuItem fontWeight="600" letterSpacing={1}>
              Billing
            </MenuItem>
            <MenuItem fontWeight="600" letterSpacing={1}>
              Apps
            </MenuItem>
            <MenuItem fontWeight="600" letterSpacing={1}>
              Request a Demo
            </MenuItem>
            <MenuItem fontWeight="600" letterSpacing={1}>
              Help Docs
            </MenuItem>
            <MenuItem fontWeight="600" letterSpacing={1} color="tomato">
              Sign Out
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
