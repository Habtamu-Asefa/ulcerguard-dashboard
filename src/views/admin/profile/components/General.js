// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React, { useState,useEffect } from "react";
import Information from "views/admin/profile/components/Information";
import fetchAdmin from "API/fetchAdmin";


export default function GeneralInformation(props) {
  const { users, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  // State to hold the fetched data
  

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="6px"
      >
        Health care professional General Information
      </Text>

      <SimpleGrid columns="2" gap="20px">
        <Information boxShadow={cardShadow} title="Name" value={users.name} />
        <Information boxShadow={cardShadow} title="Place of work" value={users.working_place} />
        <Information boxShadow={cardShadow} title="Languages" value={users.language} />
        <Information boxShadow={cardShadow} title="Year of experience" value={users.year_of_experiance} />
        <Information boxShadow={cardShadow} title="Email" value={users.email} />
        <Information boxShadow={cardShadow} title="Speciality" value={users.speciality} />
      </SimpleGrid>
    </Card>
  );
}
