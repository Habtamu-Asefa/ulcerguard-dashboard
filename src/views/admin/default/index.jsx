// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useEffect, useState } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import fetchUsers from "API/fetchUser";

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
    console.log('data: ',users)

   
    setUsers(data);

 
};

if(users.length === 0){
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
        <MiniStatistics
          name="Total Users"
          value={users.length}
        />
        <MiniStatistics
          name="Active Users"
          value={users.length}
        />
      
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
      <PieCard />

        
        <MiniCalendar h='100%' minW='100%' selectRange={false} />
      </SimpleGrid>
       <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
      
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
         
          
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          
          
        </SimpleGrid>
      </SimpleGrid> 
   
    </Box>
  );
}
