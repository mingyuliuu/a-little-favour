import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import RequestCardComponent from "../Components/RequestCardComponent";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "../Styles/HomePage.css";
import MapComponent from "../Components/MapComponent";
import MapMarkerComponent from "../Components/MapMarkerComponent";
import Loading from "../AnimationComponents/Loading";
import Failure from "../AnimationComponents/Failure";

// Deal with map rendering stages
const render = (status) => {
  if (status === Status.LOADING) return <Loading height={300} width={300} />;
  if (status === Status.FAILURE)
    return (
      <Failure
        message="Sorry, but there is an error"
        height={300}
        width={300}
      />
    );
  return null;
};

const HomePage = () => {
  // Authentication
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Geolocation (Default is set to UWaterloo)
  const [currentLocation, setCurrentLocation] = useState({
    lat: 43.471014,
    lng: -80.538362,
  });

  const toast = useToast();

  // Pop up geolocation permission request then fetch current location
  const getLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation is not supported by your browser.",
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          toast({
            title: "Unable to retrieve your location.",
            status: "error",
            variant: "subtle",
            duration: 2000,
            isClosable: false,
          });
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="home_page" id="home">
      {isLoading ? (
        <Loading height={"100vh"} />
      ) : (
        <Grid
          templateAreas={`"header header"
                  "postings map"
                  "footer footer"`}
          gridTemplateRows={"8vh 87vh 5vh"}
          gridTemplateColumns={"50vw 50vw"}
          color="blackAlpha.700"
          fontWeight="bold"
        >
          {/* The title bar on the top of screen */}
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

          {/* The postings section in the middle left portion */}
          <GridItem p="2" bg="pink.300" area={"postings"}>
            <SimpleGrid columns={2} spacing={2}>
              <RequestCardComponent />
              <RequestCardComponent />
              <RequestCardComponent />
              <RequestCardComponent />
            </SimpleGrid>
          </GridItem>

          {/* The map section on the right */}
          <GridItem p="2" bg="green.300" area={"map"} className="map_section">
            <Wrapper
              apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
              render={render}
            >
              <MapComponent center={currentLocation} zoom={16}>
                <MapMarkerComponent position={currentLocation} />
              </MapComponent>
            </Wrapper>
          </GridItem>

          {/* The footer bar on the bottom */}
          <GridItem p="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
      )}
    </div>
  );
};

export default HomePage;
