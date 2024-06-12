import React, { useState, useEffect } from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import History from "./History";

export default function UsersTable({users}) {

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");



  return (
    <div>
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          User Data 
        </Text>
        <Menu />
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            <Th borderColor={borderColor} color="gray.400">Names</Th>
            <Th borderColor={borderColor} color="gray.400">Email</Th>
            <Th borderColor={borderColor} color="gray.400">Date of Birth</Th>
            <Th borderColor={borderColor} color="gray.400">Weight</Th>
            <Th borderColor={borderColor} color="gray.400">Height</Th>
            <Th borderColor={borderColor} color="gray.400">Gender</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.name}</Text>
              </Td>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.email}</Text>
              </Td>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.dob}</Text>
              </Td>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.weight}</Text>
              </Td>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.height}</Text>
              </Td>
              <Td borderColor="transparent">
                <Text color={textColor} fontSize="sm" fontWeight="700">{user.gender}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <History/>
    
    </div>
  );
}