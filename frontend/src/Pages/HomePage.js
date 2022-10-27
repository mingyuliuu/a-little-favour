import React from "react";
import { Button } from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
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
        </div>
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
    </div>
  );
};

export default HomePage;
