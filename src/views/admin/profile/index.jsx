/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React, {useState} from "react";
import fetchAdmin from "API/fetchAdmin";




export default function Overview() {


  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
      
  //       const data = await fetchAdmin();
       
  //       setUsers(data);
  //       setLoading(false);

  //       setError(null);
     
  //   };

  //    fetchData();
  // }, [users]);

  const fetchData = async () => {
      
    const data = await fetchAdmin();
    // console.log('data: ',users)

   
    setUsers(data);
    setLoading(false);

    setError(null);
 
};

if(users.length === 0){
  fetchData();

}

  // console.log('users: ' ,users)


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1 2 1",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
         
          name="Adela Parkson"
          role="User"
        
          users={users}
        />
        {/* <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe="20px"
          pb={{ base: "100px", lg: "20px" }}
        /> */}
      </Grid>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(1, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 1 / 2 / 3" }}
          minH="365px"
          pe="20px"
          users={users}
        />
      </Grid>
    </Box>
  );
}
