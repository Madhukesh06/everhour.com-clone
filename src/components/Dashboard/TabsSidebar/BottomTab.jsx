import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

function BottomTab() {
  // TODO: redirect logout
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token =
    useSelector((store) => store.auth.token) || localStorage.getItem("token");
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  // if(!token){
  //   navigate('/')
  // }
  return (
    <Menu w={"100%"}>
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
            py={6}
            pl={3}
            bg="white"
          >
            UserName
          </MenuButton>
          <MenuList w={"100%"} p={2} color="#444444">
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
            >
              My Profile
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
              onClick={() => alert("Kagebunshin")}
            >
              Integrations
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
            >
              Billing
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
            >
              Apps
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
            >
              Request a Demo
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="blackAlpha.700"
              letterSpacing={0.5}
            >
              Help Docs
            </MenuItem>
            <MenuItem
              fontWeight="bold"
              color="tomato"
              letterSpacing={0.5}
              as={Button}
              onClick={handleLogout}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default BottomTab;
