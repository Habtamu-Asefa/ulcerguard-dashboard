// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React, { useState,useEffect } from "react";
import Information from "views/admin/profile/components/Information";
import fetchAdmin from "API/fetchAdmin";


export default function GeneralInformation(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  // State to hold the fetched data
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
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Doctor General Information
      </Text>

      <SimpleGrid columns="2" gap="20px">
        <Information boxShadow={cardShadow} title="Name" value={userData.name} />
        <Information boxShadow={cardShadow} title="Place of work" value={userData.working_place} />
        <Information boxShadow={cardShadow} title="Languages" value={userData.language} />
        <Information boxShadow={cardShadow} title="Year of experience" value={userData.year_of_experiance} />
        <Information boxShadow={cardShadow} title="Email" value={userData.email} />
        <Information boxShadow={cardShadow} title="Speciality" value={userData.speciality} />
      </SimpleGrid>
    </Card>
  );
}
