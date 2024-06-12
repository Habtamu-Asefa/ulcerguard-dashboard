// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, {useState, useEffect} from "react";
import fetchAdmin from "API/fetchAdmin";

export default function Banner(props) {
  const { banner, avatar, role, active, since, avarage,users } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );



 
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="100px"
        w="100px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {users.name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {users.speciality}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {active}
          </Text>

        </Flex>
       
        
      </Flex>
    </Card>
  );
}
