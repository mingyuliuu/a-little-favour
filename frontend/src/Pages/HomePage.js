import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import RequestCardComponent from "../Components/RequestCardComponent";

import "../Styles/HomePage.css";

const HomePage = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="home_page" id="home">
      <Grid
        templateAreas={`"header header"
                  "postings map"
                  "footer footer"`}
        gridTemplateRows={"8vh 87vh 5vh"}
        gridTemplateColumns={"50vw 50vw"}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          pl="2"
          bg="orange.300"
          area={"header"}
          display="flex"
          alignItems="center"
        >
          <Button colorScheme="teal" variant="outline" onClick={() => {}}>
            Settings
          </Button>
          <Spacer />
          {isAuthenticated ? (
            <Box display="flex" flexDirection="row" alignItems="center">
              <Image maxH="6vh" src={user.picture} alt={user.name} />
              <p>{user.email}</p>
              <Button
                rightIcon={<IoMdArrowForward />}
                colorScheme="red"
                variant="outline"
                onClick={() =>
                  logout({ returnTo: window.location.origin + "/home" })
                }
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button
              rightIcon={<IoMdArrowForward />}
              colorScheme="teal"
              variant="outline"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </GridItem>
        <GridItem p="2" bg="pink.300" area={"postings"}>
          <SimpleGrid columns={2} spacing={2}>
            <RequestCardComponent />
            <RequestCardComponent />
            <RequestCardComponent />
            <RequestCardComponent />
          </SimpleGrid>
        </GridItem>
        <GridItem p="2" bg="green.300" area={"map"}>
          Map
        </GridItem>
        <GridItem p="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default HomePage;
