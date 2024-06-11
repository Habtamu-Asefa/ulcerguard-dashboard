import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import { registerBlog } from "API/registerBlog";
import Showblog from "./showblogs/showblog";

function RegisterBlog() {
  const textColor = useColorModeValue("navy.700", "white");
  const [blogContent, setBlogContent] = useState({
    title: "",
    content: "",
    imageURL: "",
    authorId: "6658282096ef71b0927238b0", 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const history = useHistory();
  const [ViewMode, setViewMode] = useState(false);

  const handleChange = () => {
    console.log("mode changed", ViewMode);
    setViewMode(!ViewMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await registerBlog(blogContent);
      console.log(result, "RESULT");
      setSuccess("Blog successfully created!");
      // Optionally clear the form
      setBlogContent({
        title: "",
        content: "",
        imageURL: "",
        authorId: "6658282096ef71b0927238b0",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {ViewMode ? (
        <button onClick={handleChange} style={{ 
          marginBottom: "1rem", 
          padding: "0.5rem 1rem", 
          borderRadius: "5px", 
          border: "none", 
          backgroundColor: "#007BFF", 
          color: "#fff", 
          cursor: "pointer", 
          fontWeight: "bold",
          fontSize: "1rem",
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "green"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007BFF"}>Show blogs</button>
      ) : (
        <button onClick={handleChange} style={{ 
          marginBottom: "1rem", 
          padding: "0.5rem 1rem", 
          borderRadius: "5px", 
          border: "none", 
          backgroundColor: "#007BFF", 
          color: "#fff", 
          cursor: "pointer", 
          fontWeight: "bold",
          fontSize: "1rem",
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "green"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007BFF"} >Write blog</button>
      )}

      {ViewMode ? (
        <DefaultAuth>
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
                    Title
                  </FormLabel>
                  <Input
                    id="blog-title"
                    isRequired
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    type="text"
                    placeholder="Blog Title"
                    mb="24px"
                    fontWeight="500"
                    width="600px"
                    size="lg"
                    value={blogContent.title}
                    onChange={(e) =>
                      setBlogContent({ ...blogContent, title: e.target.value })
                    }
                  />
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Content
                  </FormLabel>
                  <Textarea
                  id="blog-content"
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  placeholder="Write your blog content here..."
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  value={blogContent.content}
                  onChange={(e) =>
                    setBlogContent({ ...blogContent, content: e.target.value })
                  }
                  height="250px"
                  width="600px"
                />
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Image URL
                  </FormLabel>
                  <Input
                    id="blog-image"
                    isRequired
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    type="text"
                    placeholder="Image URL"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    width="600px"
                    value={blogContent.imageURL}
                    onChange={(e) =>
                      setBlogContent({ ...blogContent, imageURL: e.target.value })
                    }
                  />
                  <Button
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="100%"
                    h="50"
                    mb="24px"
                    type="submit"
                    isLoading={loading}
                  >
                    Submit
                  </Button>
                  {error && (
                    <Text color="red.500" mt="4">
                      {error}
                    </Text>
                  )}
                  {success && (
                    <Text color="green.500" mt="4">
                      {success}
                    </Text>
                  )}
                </FormControl>
              </form>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                maxW="100%"
                mt="0px"
              />
            </Flex>
          </Flex>
        </DefaultAuth>
      ) : (
        <Showblog />
      )}
    </div>
  );
}

export default RegisterBlog;
