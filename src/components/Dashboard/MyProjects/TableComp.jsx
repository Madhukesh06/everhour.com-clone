import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import SidebarMenu from "./SidebarMenu";

export default function TableComp() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w="60%">NAME</Th>
            <Th w="10%">MEMBERS</Th>
            <Th w="10%" isNumeric>
              BUDGET
            </Th>
            <Th w="20%" isNumeric>
              BILLING
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td _hover={{ cursor: "pointer" }}>inches</Td>
            <Td>
              <SidebarMenu />
            </Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>
              <SidebarMenu />
            </Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>
              <SidebarMenu />
            </Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
