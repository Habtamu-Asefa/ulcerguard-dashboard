// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, {useState, useEffect} from "react";
import fetchAdmin from "API/fetchAdmin";

export default function Banner(props) {
  const { banner, avatar, role, active, since, avarage } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchAdmin();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading data: {error.message}</Text>;
  }

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
        {userData.name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {userData.speciality}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {active}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Active Hours
          </Text>
        </Flex>
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {avarage}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Normal Avarage
          </Text>
        </Flex>
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {since}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Since
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
