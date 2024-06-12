// Chakra imports
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Assets
// Custom components
import fetchUsers from "API/fetchUser";
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import { useState } from "react";
import PieCard from "views/admin/default/components/PieCard";

export default function UserReports() {
  const [data, setData] = useState("No data yet!");
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const handleFetch = async () => {
    const response = await fetchUsers();
    console.log(response);
  };

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const data = await fetchUsers();
    console.log("data: ", users);

    setUsers(data);
  };

  if (users.length === 0) {
    fetchData();
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/*
          <Text>{data}</Text>
          <Button colorScheme="blue" size="lg" onClick={handleFetch}>
        Fetch Sample
      </Button>{" "}
      */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics name="Total Users" value={users.length} />
        <MiniStatistics name="Active Users" value={users.length} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <PieCard />

        <MiniCalendar h="100%" minW="100%" selectRange={false} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px"></SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px"></SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
