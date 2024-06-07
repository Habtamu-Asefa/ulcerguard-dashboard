import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import shoes from "assets/img/auth/shoes.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  const [firstName, setFirstName] = useState("miedan");
  const [lastName, setLastName] = useState("bizuayehu");
  const [email, setEmail] = useState("mb@gmmail.com");
  const [password, setPassword] = useState("1234");
  const [speciality, setSpeciality] = useState("Endocrinologist");
  const [year_of_experiance, setyear_of_experiance] = useState("10");
  const [language, setlanguage] = useState("Amharic");
  const [working_place, setworking_place] = useState("Black Lion");
  

  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
  
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    const name = `${firstName} ${lastName}`;
  
    try {
      console.log('data to send:', { name, email, password, speciality, year_of_experiance, language, working_place });
      
      const response = await fetch("http://localhost:3001/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, speciality, year_of_experiance, language, working_place }),
      });
  
      console.log('Response status:', response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.log('Error response text:', errorText);
        throw new Error("Failed to sign up. Please try again.");
      }
  
      const data = await response.json();
      console.log("Successfully signed up:", data);
    //   history.push("/dashboard"); // Redirect to the dashboard or any other page
    } catch (error) {
      console.error("Error during sign up:", error);
      setError(error.message);
    }
  };
  return (
    <DefaultAuth illustrationBackground={shoes} image={shoes}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign Up
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your Information to sign up!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                First name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="first-name"
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Miedan"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Last name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="last-name"
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Bizuayehu"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="email"
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mb@gmail.com"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Speciality<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="speciality"
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Endocronologist"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              />

              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                working place<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="working_place"
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Black Lion"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={working_place}
                onChange={(e) => setworking_place(e.target.value)}
              />
              
              <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Year of experience<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              id="year_of_experience"
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              placeholder="2"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={year_of_experiance}
              onChange={(e) => setyear_of_experiance(e.target.value)}
            />


            <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Language<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            id="language"
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="2"
            mb="24px"
            fontWeight="500"
            size="lg"
            value={language}
            onChange={(e) => setlanguage(e.target.value)}
          />
              

              {error && (
                <Text color="red.500" mb="24px" fontWeight="500" fontSize="sm">
                  {error}
                </Text>
              )}

              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                type="submit"
              >
                Sign Up
              </Button>
            </FormControl>
          </form>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Already have an account?
              <NavLink to="/auth/sign-in">   
          
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Sign In
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
